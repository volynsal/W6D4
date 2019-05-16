class DOMNodeCollection {

    constructor (array) {
        this.htmls = array;
    }

    html (string) {
        if (typeof string === 'string') {
            this.htmls.forEach((ele) => {
                ele.innerHTML = string;
            });
        }
        else {
            return this.htmls[0].innerHTML;
        }
    }

    empty () {
        this.html('');
    }

    append (arg) {
        if (typeof arg === 'string') {
            this.htmls.forEach((ele) => {
                ele.innerHTML += arg;
            });
        }
        
        else if (arg instanceof DOMNodeCollection) {
            this.htmls.forEach((ele) => {
                for (i = 0; i < arg.length; i++) {
                    ele.innerHTML += arg[i].outerHTML;
                }
            });
        }
        
        else {
            this.htmls.forEach((ele) => {
                ele.innerHTML += arg.outerHTML;
            });
        }
    }

    attr (attributeName, val)  {
        if (typeof val === 'undefined') {
            this.htmls.forEach((ele) => {
                if (ele.hasAttribute(attributeName)) {
                    return ele.getAttribute(attributeName);
                }
            });
        }
        else {
            this.htmls.forEach((ele) => {
                // if (ele.hasAttribute(attributeName)) {
                    ele.setAttribute(attributeName, val);
                // }
            });
        }
    }

    addClass (classNames) {
        this.htmls.forEach((ele) => {
            ele.className += classNames;
        });
    }

    removeClass (classNames) {
        this.htmls.forEach((ele) => {
            ele.classList.remove(classNames);

            // let argLength = classNames.length; 
            // let eleLength = ele.className.length;
            // for (let i = 0; i < (eleLength - argLength); i++) {
            //     let substring = ele.className.slice(i, i+argLength);
            //     if (substring === classNames) {
            //         let left = ele.className.slice(0, i);
            //         let right = ele.className.slice(i+1);
            //         ele.className = (left + right);
            //     }
            // }
        });
    }

    children () {
        var children = [];
        this.htmls.forEach((ele) => {
            children.push(ele.childNodes);
        });
        return new DOMNodeCollection(children);
    }

    parent () {
        var parents = [];
        this.htmls.forEach((ele) => {
            parents.push(ele.parentNode);
        });
        return new DOMNodeCollection(parents);
    }

    find (selector) {
        var nodeList = document.querySelectorAll(selector);
        return new DOMNodeCollection(nodeList);
    }

    remove () {
        this.htmls.forEach ((ele) => {
            ele.innerHTML = "";
        });

        // this.htmls = [];
    }

    on (event, callback) {
        this.htmls.forEach((node) => {
            node.addEventListener(event, callback);
            node.callback = callback;
        });
        
    }

    off (event) {
        this.htmls.forEach((node) => {
            node.removeEventListener(event, node.callback);
        });

    }
}

module.exports = DOMNodeCollection;