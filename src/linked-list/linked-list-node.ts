export class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}