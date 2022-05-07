function fOne() {
    
    const input = document.getElementById('f1Input').value;
    
    const outputElement = document.getElementById('f1Output');

    outputElement.innerHTML = 'Reverse Number' + reverse_a_number(input);
}


//this function changes the order of the numbers
function reverse_a_number(n)
{
    
	n = n + "";
	return n.split("").reverse().join("");
    
    
}

