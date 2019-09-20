import {LinkedList} from "./linked-list";


describe('linkedList', function() {
    it('add', function() {
        let linkedList: LinkedList<number> = new LinkedList();
        for (let i: number = 0; i < 100; i++) {
            linkedList.add(i);
        }

        for (let i: number = 0; i < 100; i++) {
            const result = linkedList.get(i);
            expect(result).toBe(i);
        }
    });

    it('remove', function() {
        let linkedList: LinkedList<number> = new LinkedList();
        for (let i: number = 0; i < 100; i++) {
            linkedList.add(i);
        }

        linkedList.remove(0);

        console.log(linkedList)


        for (let i: number = 0; i < 99; i++) {
            const result = linkedList.get(i);
            expect(result).toBe(i + 1);
        }
    });
});