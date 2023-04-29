type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

class Queue<T> {
  public length: number;
  private head: NodeType<T> | null;
  private tail: NodeType<T> | null;

  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  enqueue(value: T): void {
    const node = { value: value, next: null } as NodeType<T>;

    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    const tail = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | null {
    if (!this.head) {
      return null;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    return head.value;
  }

  peek(): T | null {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }
}
