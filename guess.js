/*
 * This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount; // intMax is for the maximum number the user can choose for a range while the intMin is the minimum number they can choose for the game.
//intRandom is the random number the computer generates and intGuess is the number the user guesses.

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:"));
while (isNaN(intMin)||intMin < 0 )
{
	alert("Your input must be a number and it cannot be lower than 0. Please enter a new number.");
	intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:"));
} //the while loop validates the users input for their choice on the lowest number of their guessing range. if the input is not a number or less than zero than the loop will prompt the user to enter a new input.
	

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("Choose the highest number in your guessing range: \n Note: your highest number must be at least 2 more than " + intMin));
while (isNaN(intMax) || intMax < (intMin + 2)) {
	alert("Your input must be a number and it must be at least two more than your lowest number. Please enter a new number.");
	intMax = parseInt(prompt("Choose the highest number in your guessing range: \n Note: your highest number must be at least 2 more than " +intMin));
} //this while loop is also a validation for the intMax input to make sure it is a number and is not less than intMin+2.


/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); //this generates a random number so the user can guess it.


// set the loop counter

intCount=1; //this is the loop counter to measure the amount of attempts it takes for the user to guess the correct number.

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " +intMax));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
	alert("Your guess must be in between " + intMin + " and " + intMax);
	intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " +intMax));
} //this while loop validates the user's guess input by making sure it is a number and it is in between their guessing range.If not it will ask the user for a new guess.

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

{while (intGuess!=intRandom)
	{
		if (intGuess<intRandom)
		{
			alert("Your choice of " + intGuess + " is too low! Please try again.");
			intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " +intMax));
		}
		else
		{
			alert("Your choice of " + intGuess + " is too high! Please try again.");
			intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " +intMax));
		}
		intCount++; //counts up the total attempts it takes the user to guess the correct answer.
	}
} //this while loop is to let the user know if their input is too high or too low compared to the random number the computer generated. This will help them guess the random number much more easily.
 //if the user guesses the correct input the loop will end and move on to the alert that congratulates them and tells them how many attempts it took to guess the correct number. 
// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

