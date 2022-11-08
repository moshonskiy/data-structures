// array simplified, restricted options of interacting with it (only push and pop)

//                                      time complexity
//                              stack                  array

// element access               O(1)                      O(1)
// insertion at the end         O(1)                      O(1)
// insertion at the beginning   O(n) with data loss       O(n)
// insertion in the middle      O(n) with data loss       O(n)
// search time                  O(n) with data loss       O(n)

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return this.items.slice();
    }
}
