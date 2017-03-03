class DOMNodeCollection {
  constructor(HTMLElements) {
    this.elements = HTMLElements;
  }

  html(innerHTML = null){
    if (innerHTML === null) {
      this.elements[0].innerHTML();
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML(innerHTML);
      }
    }
  }

  empty(){
    this.elements.html("");
  }

  append(outerHTML){
    if (outerHTML instanceof this) {
      this.html(outerHTML);
    }
  }

  attr(attribute, value){
    if (value === null) {
      this.elements[0].setAttribute(attribute, value);
    } else {
      this.elements[0].getAttribute(attribute);
    }

  }
  addClass(className){
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].className(className);
    }
  }

  removeClass(className){
    let classNames = className.split(" ");
    for (var j = 0; j < classNames.length; j++) {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].classNames(classNames[j], "");
      }

    }
  }

  children(){
    let result = [];
    for (var i = 0; i < this.elements.length; i++) {
      result.push(this.elements[i].children);
    }
    return new DOMNodeCollection(result);
  }

  parent(){
    let result = [];
    for (var i = 0; i < this.elements.length; i++) {
      if (!result.includes(this.elements[i].parentNode.nodeName)) {

        result.push(this.elements[i].parentNode.nodeName);
      }
    }
    return new DOMNodeCollection(result);
  }

  find(selector){
    let result = [];
    for (var i = 0; i < this.elements.length; i++) {
      if (true) {

        result.push(this.elements[i].querySelectorAll(selector));
      }
    }
    return new DOMNodeCollection(result);
  }
  remove(){
    this.empty();

  }

  remove() {

    this.each(element => {
      element.parentNode.removeChild(element);
    });
  }

  on() => {
    target.addEventListener(type, listener[, options]);
  }
}

module.exports = DOMNodeCollection;
