import {LinkedList} from "./linked-list/linked-list";


document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const linkedList: LinkedList<string> = new LinkedList();
    for (let i: number = 0; i < 100; i++) {
        linkedList.add(`Item ${i}`);
    }

    const documentFragment: DocumentFragment = document.createDocumentFragment();

    let a = 0;
    for (const item of linkedList) {
        const li: HTMLElementTagNameMap['li'] = document.createElement('li');
        li.innerText = item;
        console.log(linkedList.get(a++))
        documentFragment.appendChild(li);
    }

    const ul: HTMLElementTagNameMap['ul'] = document.createElement('ul');
    ul.appendChild(documentFragment);
    main.appendChild(ul);
});