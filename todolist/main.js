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

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name"></span>
        <button class="item__delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `;
    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');
    //
    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;
    //
    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item__delete');
    // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // })
    //
    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');
    //
    // item.appendChild(name);
    // item.appendChild(deleteBtn);
    //
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
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


const resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click', () => {
    document.querySelector('items').reset();
})