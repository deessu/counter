'use strict';

const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num');

let defaulValue = 1;

plus.addEventListener('click', ()=> {
    defaulValue++;
    defaulValue = (defaulValue < 10) ? '0' + defaulValue : defaulValue;
    num.innerText = defaulValue;
});

minus.addEventListener('click', ()=> {
    if(defaulValue > 1) {
        defaulValue--;
        defaulValue = (defaulValue < 10) ? '0' + defaulValue : defaulValue;
        num.innerText = defaulValue;
    }
});