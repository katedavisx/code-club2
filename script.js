// Add your code below...

const myName = "Kate"
const myLastName = "Davis"
const myFullName = myName + " " + myLastName

const number1 = 8
const number2 = 17
const sumNumbers = number1 + number2

function flipCoin(threshold) {

	const myRandomNumber = Math.random()
	if (myRandomNumber > threshold) {
		alert ("You Won, " + myName)
		alert ("You really won !")
	}
	else {
		alert ("You lost, " + myName)
		alert ("loser!")
	}

}

function resizeButton() {
	const newRadius = Math.floor(Math.random() * 20);
	$('.button').css('border-radius', newRadius + 'px');
}

function slideImage() {
	$('.MyProfile').slideUp();
	$('.MyProfile').slideDown();
}
