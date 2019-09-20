import {LinkedListHead} from "./constants/linked-list-head.const";
import {LinkedListNode} from "./linked-list-node";


export class LinkedList<T> {
    tail: LinkedListNode<T>;

    constructor() {
        this[LinkedListHead] = null;
        this.tail = null;
    }

    add(data: T): LinkedList<T> {
        const newData: LinkedListNode<T> = new LinkedListNode(data);

        if (this[LinkedListHead] === null) {
            this[LinkedListHead] = newData;
        } else {
            let current: LinkedListNode<T> = this[LinkedListHead];

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newData;
        }

        return this;
    }

    fastAdd(data: T): LinkedList<T>  {
        const newData: LinkedListNode<T> = new LinkedListNode(data);

        if (this[LinkedListHead] === null) {
            this.tail = this[LinkedListHead] = newData;
        } else {
            this.tail.next = newData;
            this.tail = this.tail.next;
        }

        return this;
    }


    get(index: number): T {
        if (index > -1) {
            let current: LinkedListNode<T> = this[LinkedListHead],
                i: number = 0;

            while(current !== null && i !== index) {
                current = current.next;
                i++;
            }

            return current ? current.data : undefined;

        } else {
            return undefined;
        }
    }

    remove(index: number): LinkedListNode<T> {
        if (this[LinkedListHead] !== null && index > -1) {
            if (index === 0) {
                const result = this[LinkedListHead];
                this[LinkedListHead] = this[LinkedListHead].next;
                return result;
            }

            let prev: LinkedListNode<T> = null;
            let current: LinkedListNode<T> = this[LinkedListHead];
            let i: number = 0;

            while (index !== i && current !== null) {
                prev = current;
                current = current.next;
                i++
            }

            if (current !== null) {
                prev.next = current.next;
                return current;
            }
        } else {
            return undefined;
        }
    }

    [Symbol.iterator](): Generator<T> {
        return this.getNextValue();
    }

    *getNextValue(): Generator<T> {
        let current: LinkedListNode<T> = this[LinkedListHead];

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
}