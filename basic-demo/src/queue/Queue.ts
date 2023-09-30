class Queue<E> {

  private count: number;
  private lowestCount: number;
  private items: object;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
  }

  enqueue(element: E) {
    this.items[this.count] = element;
    this.count++;
  }
  // 从队列头出队列
  dequeue(): E | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    let item: E = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }
  peek(): E | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count == this.lowestCount;
  }
  size() {
    return this.count - this.lowestCount;
  }
}

export default Queue;