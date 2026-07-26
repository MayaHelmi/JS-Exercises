// Q1 - show the value of each expression
function q1() {

    let x = 4.2;

    console.log(-9 * 3);              // -27
    console.log("value is " + 50);    // value is 50
    console.log(17 % 5);              // 2
    console.log(5 % 17);              // 5
    console.log(5 / 10);              // 0.5
    console.log(4 == 4);              // true
    console.log(4 != 5);              // true
    console.log(7 <= 8);              // true
    console.log(Math.ceil(x) - Math.floor(x));  // 1 (0 if x is a whole number)

    alert("Q1 answers are in the console (F12)");

}


// Q2 - read a number and display it
function q2() {

    let num = prompt("Enter a number:");

    alert("You entered " + num);

}


// Q3 - read two numbers and show them in ascending order
function q3() {

    let a = Number(prompt("Enter the first number:"));
    let b = Number(prompt("Enter the second number:"));

    if (a < b) {
        alert(a + " , " + b);
    }

    else {
        alert(b + " , " + a);
    }

}


// Q4 - read two numbers and show the larger one
function q4() {

    let a = Number(prompt("Enter the first number:"));
    let b = Number(prompt("Enter the second number:"));

    if (a > b) {
        alert("The larger number is " + a);
    }

    else if (b > a) {
        alert("The larger number is " + b);
    }

    else {
        alert("The two numbers are equal");
    }

}


// Q5 - read two numbers and show their sum
// Problem: prompt gives a STRING, so "5" + "10" = "510" instead of 15.
// Solution: change the strings into numbers with Number().
function q5() {

    let a = Number(prompt("Enter the first number:"));
    let b = Number(prompt("Enter the second number:"));

    alert("The sum is " + (a + b));

}


// Q6 - print the number as a word
function q6() {

    let num = Number(prompt("Enter a number from 1 to 9:"));

    if (num == 1) {
        alert("ONE");
    }

    else if (num == 2) {
        alert("TWO");
    }

    else if (num == 3) {
        alert("THREE");
    }

    else if (num == 4) {
        alert("FOUR");
    }

    else if (num == 5) {
        alert("FIVE");
    }

    else if (num == 6) {
        alert("SIX");
    }

    else if (num == 7) {
        alert("SEVEN");
    }

    else if (num == 8) {
        alert("EIGHT");
    }

    else if (num == 9) {
        alert("NINE");
    }

    else {
        alert("PLEASE TRY AGAIN");
    }

}
