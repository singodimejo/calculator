let data = [];

//get the result div and the p tag in it
let resDiv = document.getElementsByClassName('res')[0];
let res = resDiv.firstChild;

//get the digit and concats it to the result p text
let digits = Array.from(document.getElementsByClassName('digits'));
digits.forEach(el => el.addEventListener('click', event => {
    res.innerHTML = res.innerHTML + event.target.innerHTML;
}));

//addition function
let plus = document.getElementById('add');

let addition = (event) => {
    if (!!data[2]) {
        data[0] = data[0] + data[2];
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else if (!data[0]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = event.target.innerHTML;
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = '+';
    }
    res.innerHTML = '';
};

plus.addEventListener('click', addition);

//Substraction Function
let substract = document.getElementById('substract');

let substraction = (event) => {
    if (!!data[2]) {
        data[0] = data[0] - data[2];
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else if (!data[0]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = event.target.innerHTML;
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = '-';
    }
    res.innerHTML = '';
};

substract.addEventListener('click', substraction);

//Multiplication Function
let multiply = document.getElementById('multiply');

let multiplication = (event) => {
    if (!!data[2]) {
        data[0] = data[0] * data[2];
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else if (!data[0]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = event.target.innerHTML;
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = '*';
    }
    res.innerHTML = '';
};

multiply.addEventListener('click', multiplication);

//Division Function
let divide = document.getElementById('divide');

let division = (event) => {
    if (!!data[2]) {
        data[0] = data[0] / data[2];
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else if (!data[0]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = event.target.innerHTML;
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = '/';
    }
    res.innerHTML = '';
};

divide.addEventListener('click', division);

//Result Call
let equal = document.getElementById('equal');

let resCall = () => {
    if (data[1] === "+") {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        addition();
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "-") {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        substraction();
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "*") {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        multiplication();
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "/") {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        division();
        data.pop();
        res.innerHTML = data[0];
    }
};

equal.addEventListener('click', resCall);