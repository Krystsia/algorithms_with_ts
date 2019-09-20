import {LinkedListNode} from "./linked-list-node";


describe('linkedListNode', function() {
    it('add', function() {
        let linkedList: LinkedListNode<number> = new LinkedListNode(23);
        expect(linkedList.data).toBe(23);
    });
});