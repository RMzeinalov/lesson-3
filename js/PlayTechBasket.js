"use strict";

const basketButton = document.querySelector('.btn-cart');
const basketTotalDiv = document.querySelector('.basket'); 

basketButton.addEventListener('click', () => { 
    basketTotalDiv.classList.toggle('hidden');
});