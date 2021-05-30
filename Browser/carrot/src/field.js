'use strict';

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = field.getBoundingClientRect();
        this.field.addEventListener('click', this.onClick);
    }

}