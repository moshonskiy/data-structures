//                                      time complexity
//                              stack                               array

// element access               O(1) limited to 1 element           O(1)
// insertion at the end         O(n) with data loss                 O(1)
// insertion at the beginning   O(1)                                O(n)
// insertion in the middle      O(n) with data loss                 O(n)
// search time                  O(n) with data loss                 O(n)

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.unshift(value);
    }

    dequeue() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return this.items.slice();
    }
}