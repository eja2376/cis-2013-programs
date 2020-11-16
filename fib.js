// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output
//gets user input from the DOM
// sets the first number in the Fibonacci series to 0
//sets the second number in the Fibonacci series to 1
//k is calculated by adding i+j and represents the next Fibonacci number
//initialize the Fibonacci series output to include the first two numbers
//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
// write whatever kind of loop you want, given the above info, to generate the appropriate
// number of Fibonacci numbers and then post it to the html DOM
// Push solution back to Output through DOM
//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}


var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //takes the input entered from the user int the HTML input box.
	var i=0; //this is the first value of the Fibonacci sequence.  
	var j=1; //this is the second value of the Fibonacci sequence.
	var k;   //this will hold the sum of i and j for the Fibonacci formula.
	var stringOutput = "0 1"; //this will be display all the requested numbers of the Fibonacci sequence.

	if (isNaN(intCount) || intCount<1 || intCount>100)//this is to validate user input by making sure the input is a number and it is between 1 and 100.
    {
		alert("Your input must be a number that is between 1 and 100. Please enter a new number.");
        $("total_fib").value = "";//this will blank out the html input box so the user will put a new number.
        stringOutput= "";//this clears out the html Output box (displays Fibonacci numbers) until the user inputs a valid input.
	}
    else
    {
        while (intCount>2) //once the input meets the validation requirements it will go through the while loop to generate the Fibonacci sequence.
        {
            k=i+j; //this is the Fibonacci formula
            i=j; //this changes the value of the i variable so the Fibonacci formula can generate a new number of the sequence. 
            j=k; //similar to the comment in i=j but for the j variable
            stringOutput = stringOutput+" "+ k; //this will print out the entire Fibonacci sequence based on the value of intCount
            intCount--;
        }    
    }
	  
    $("output").value = stringOutput; //this prints out the Fibonacci sequence by sending the value of stringOutput to display in the html output box. 
}


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
} 