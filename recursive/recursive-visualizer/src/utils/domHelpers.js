// This file contains utility functions for manipulating the DOM, such as adding or removing elements.

function createElement(tag, className = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

function appendChild(parent, child) {
    parent.appendChild(child);
}

function removeChild(parent, child) {
    parent.removeChild(child);
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function setTextContent(element, text) {
    element.textContent = text;
}

function setInnerHTML(element, html) {
    element.innerHTML = html;
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
}

function removeEventListener(element, event, handler) {
    element.removeEventListener(event, handler);
}