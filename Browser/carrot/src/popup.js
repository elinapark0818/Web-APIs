'use strict';

class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpMessage = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            hide();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    hide() {
        this.popUp.classList.add('pop-up--hide')
    }

}