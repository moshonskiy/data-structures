class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value, next: this.head };

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = { value, next: existingNode.next };
            existingNode.next = newNode;

        }
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let pointer = this.head;

        while(pointer.next) {
            if (pointer.value === value) {
                return pointer;
            }
            pointer = pointer.next;
        }

        return null;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let pointer = this.head;

        while (pointer.next) {
            if (pointer.next.value === value) {
                pointer.next = pointer.next.next;
            } else {
                pointer = pointer.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = pointer;
        }
    }

    toArray() {
        const arrayList = [];

        let pointer = this.head;
        while(pointer) {
            arrayList.push(pointer);

            pointer = pointer.next;
        }

        return arrayList;
    }
}
