//modifier for the dice rolls
//takes the value of the input and stores that in a variable to add to dice rolls
function plusOrMinusFunc() {
    let plusOrMinusString = document.getElementById("plusAndMinus").value;
    let plusOrMinus = parseInt(plusOrMinusString, 10);
    console.log(typeof plusOrMinus);
    return plusOrMinus;
}
//rolls a d4 dice
var d4Dice = {
    sides: 4,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//rolls a d6 dice
var d6Dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//d8
var d8Dice = {
    sides: 8,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//d10
var d10Dice = {
    sides: 10,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//d12
var d12Dice = {
    sides: 12,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//d20
var d20Dice = {
    sides: 20,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//d100
var d100Dice = {
    sides: 100,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1 + plusOrMinusFunc();
        return randomNumber;
    }
}
//prints a number to the page at the placeholder paragraph
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}
//rolls and prints the result of a d4 roll
var d4 = document.getElementById('d4');
d4.onclick = function () {
    document.getElementById('placeholder').innerHTML = "";
    var result = d4Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d6 roll
var d6 = document.getElementById('d6');
d6.onclick = function () {
    var result = d6Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d8 roll
var d8 = document.getElementById('d8');
d8.onclick = function () {
    var result = d8Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d10 roll
var d10 = document.getElementById('d10');
d10.onclick = function () {
    var result = d10Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d12 roll
var d12 = document.getElementById('d12');
d12.onclick = function () {
    var result = d12Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d20 roll
var d20 = document.getElementById('d20');
d20.onclick = function () {
    var result = d20Dice.roll();
    printNumber(result);
};
//rolls and prints the result of a d8 roll
var d100 = document.getElementById('d100');
d100.onclick = function () {
    var result = d100Dice.roll();
    printNumber(result);
};
//creating little function to highlight value of modifier to make it easier to change number
function selectAll(id) {
    var input = document.getElementById('plusAndMinus');
    input.focus();
    input.select();
}
//create a clear function
function clearButton() {
    
}