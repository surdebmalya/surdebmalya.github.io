const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const div = document.getElementById('div');
const mul = document.getElementById('mul');
const equals = document.getElementById('equals');
const inputEl = document.getElementById('input-el');
const clear = document.getElementById('clear');
const back = document.getElementById('back');
const open = document.getElementById('open');
const close = document.getElementById('close');

back.addEventListener("click", function () {
    inputEl.disabled = false;
    s = inputEl.value;
    result = '';
    for (let i = 0; i < s.length - 1; i++) {
        result += s[i];
    }
    inputEl.value = result;
    inputEl.disabled = true;
})

open.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += "(";
    inputEl.disabled = true;
})

close.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += ")";
    inputEl.disabled = true;
})

clear.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value = "";
    inputEl.disabled = true;
})

zero.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 0;
    inputEl.disabled = true;
})

one.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 1;
    inputEl.disabled = true;
})

two.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 2;
    inputEl.disabled = true;
})

three.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 3;
    inputEl.disabled = true;
})

four.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 4;
    inputEl.disabled = true;
})

five.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 5;
    inputEl.disabled = true;
})

six.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 6;
    inputEl.disabled = true;
})

seven.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 7;
    inputEl.disabled = true;
})

eight.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 8;
    inputEl.disabled = true;
})

nine.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += 9;
    inputEl.disabled = true;
})

dot.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += ".";
    inputEl.disabled = true;
})

plus.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += "+";
    inputEl.disabled = true;
})

minus.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += "-";
    inputEl.disabled = true;
})

div.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += "/";
    inputEl.disabled = true;
})

mul.addEventListener("click", function () {
    inputEl.disabled = false;
    inputEl.value += "*";
    inputEl.disabled = true;
})

equals.addEventListener("click", function () {
    inputEl.disabled = false;
    equ = inputEl.value;
    solution = '';
    try {
        solution = eval(equ);
    }
    catch (e) {
        alert("Sorry the equaltion can't be evaluated");
    }
    inputEl.value = solution;
    inputEl.disabled = true;
})