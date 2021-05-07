'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer__text');
const plusBtn = document.querySelector('.plusBtn');

function onText() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});

    input.value = '';
    input.focus();
}

let id = 0; // UUID...best!
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

plusBtn.addEventListener('click', () => {
    onText();
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onText();
    }
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

const resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click',() => {
    items.innerHTML = '';
})