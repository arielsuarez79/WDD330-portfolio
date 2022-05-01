function fOne() {
    
    const input = document.getElementById('f1Input').value;
    
    const outputElement = document.getElementById('f1Output');

    outputElement.innerHTML = 'You entered: ' + reverse_a_number(input);
  }



function reverse_a_number(n)
{
    
	n = n + "";
	return n.split("").reverse().join("");
    
    
}

