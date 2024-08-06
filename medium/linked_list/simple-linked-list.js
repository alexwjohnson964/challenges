"use strict";
class Element {
  constructor(data, next = null){
    this.data = data;
    this.nextElement = next;
  }
  datum(){
    return this.data;
  }
  isTail(){
    return this.nextElement === null;
  }
  next(){
    return this.nextElement;
  }
  setNext(e){
    this.nextElement = e;
  }
}
class SimpleLinkedList {
  static fromArray(arr) {
    if (arr === null) return new SimpleLinkedList();
    let newList = new SimpleLinkedList();
    arr.slice().reverse().forEach(item => {
      newList.push(item);
    })
    
    return newList;
  }
  constructor(){
    this.length = 0;
    this.headElement = null;
    this.tail = null;
  }
  size(){
    return this.length;
  }
  isEmpty(){
    return this.size() === 0;
  }
  head(){
    return this.headElement;
  }
  push(element){
    let newElement = new Element(element);
    if (this.isEmpty()) {
     this.tail = newElement;
     newElement.setNext(null);
    }
    else {
      newElement.setNext(this.head());
    }
    
    this.headElement = newElement;
    this.length += 1;
  }
  pop(){ 
    let newHead = this.head().next();
    let e = this.head()
    this.head().setNext(null);
    this.headElement = newHead;
    this.length -= 1;
    return e.datum();
  }
  peek(){
    if (this.head() !== null) {
      return this.head().datum();
    }
    return null;
  }
  reverse(){
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
  toArray(){
    let arr = [];
    let current = this.head();
    if (current === null) return arr;
    do {
      arr.push(current.datum());
      current = current.next();
    } while (current !== null) 
      
    
    return arr;
  }
}

module.exports = {SimpleLinkedList, Element}