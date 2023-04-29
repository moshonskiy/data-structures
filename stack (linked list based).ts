type TypeNode<T> = {
  value: T;
  prev: TypeNode<T> | null;
};

class Stack<T> {
  public length: number;
  private head: TypeNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(value: T): void {
    const node = { value, prev: null } as TypeNode<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    const head = this.head;
    node.prev = head;
    this.head = node;
  }

  pop(): T | null {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head as TypeNode<T>;
      this.head = null;
      return head.value;
    }

    const head = this.head as TypeNode<T>;
    this.head = head.prev;
    return head.value;
  }

  peek(): T | null {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }
}
