class Stack<E> {

  private items: Array<E>;

  constructor() {
    this.items = []
  }

  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  imEmpty() {
    return this.items.length == 0;
  }
  peek() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  push(element: E) {
    this.items.push(element);
  }

  pop() {
    if (this.imEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
}

export default Stack;