"use strict";

(function (){
})(); 


const messageWrapper = document.getElementById('message');

var nOne = parseInt(prompt('Enter first number'));
var nTwo = parseInt(prompt('Enter second number'));
var nThree = parseInt(prompt('Enter third number'));
var nFour = parseInt(prompt('Enter fourth number'));

let message = 'Your answer is ' + (nOne+nTwo-nThree) *nFour; 

messageWrapper.innerHTML = message; 