const DOMNodeCollection = require('./dom_node_collection.js');

$l = function (selector) {
    if (selector instanceof HTMLElement) {
        var htmls = Array.from(selector);
        var dom_node = new DOMNodeCollection(htmls);
        return dom_node;
    }
    

    else if (selector instanceof Function) {
        var queue = [];
        queue.push(selector) 
    }


    var nodeList = document.querySelectorAll(selector);
    return new DOMNodeCollection(Array.from(nodeList)); //Send this into DOMNodeCollection
};

window.$l = $l;

