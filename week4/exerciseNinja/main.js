const form = document.forms.search;
const input = form.elements.searchInput;

    //input.addEventListener('focus', () => alert('focused'), false);

    //input.addEventListener('blur', () => alert('blurred'), false);

//Submitting a Form
/*const form = document.forms['search'];
    form.addEventListener ('submit', search, false);
    function search() {
    alert(' Form Submitted');
    }*/

/*function search(event) {
    alert('Form Submitted');
    event.preventDefault();
    }*/

    //Retrieving and Changing Values From a Form
    
/*function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
    } */  
    
input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
    input.value = ''
    }
    }, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
    input.value = 'Search Here';
    } }, false);

function squareRoot(number) {
    'use strict';
    if (number < 0) {
    throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
    };