// Part 3 - Update greeting with user's name
var userName;
while(userName==null||userName=="")
{
	userName= window.prompt("Please enter your name");
}
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

// Part 4 - Get numbers from user
var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");
var num1,num2;
while(num1==null||num1==""||isNaN(num1))
{
	num1 = window.prompt("enter a number")
}
while(num2==null||num2==""||isNaN(num2)||num2==0)
{
	num2 = window.prompt("enter another number");
}
span1.innerHTML = num1;
span2.innerHTML = num2;

// Part 5 - Operations
var sum = parseInt(num2) + parseInt(num1);
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

// Part 6 - Display results
var resultMessage = "<span>" + num1 + "</span> and <span>" + num2 + "</span> is ";
document.getElementById("addition").innerHTML = "The sum of " + resultMessage + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + resultMessage + difference;
document.getElementById("multiplication").innerHTML = "The product of " + resultMessage + product;
document.getElementById("division").innerHTML = "The quotient of " + resultMessage + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + resultMessage + modResult;
