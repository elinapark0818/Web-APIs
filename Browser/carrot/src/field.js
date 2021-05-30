'use strict';

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = field.getBoundingClientRect();
        this.field.addEventListener('click', this.onClick);
    }

    init() {
        field.innerHTML = '';
        addItem('carrot', CARROT_COUNT, 'img/carrot.png');
        addItem('bug', BUG_COUNT, 'img/bug.png');
    }

    addItem(className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = fieldRect.width - CARROT_SIZE;
        const y2 = fieldRect.height - CARROT_SIZE;
        for (let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            field.appendChild(item);
        }
    }

    onClick(event) {

    }
}