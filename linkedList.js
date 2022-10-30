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
