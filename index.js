let data = [];

//get the result div and the p tag in it
let resDiv = document.getElementsByClassName('res')[0];
let res = resDiv.firstChild;

//get the digit and concats it to the result p text
let digits = Array.from(document.getElementsByClassName('digits'));
digits.forEach(el => el.addEventListener('click', event => {
    res.innerHTML = res.innerHTML + event.target.innerHTML;
    if (!data[1]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    }
}));

//AC Function
let AC = document.getElementById('ac');
let clearAll = () => {
    data = [];
    res.innerHTML = ''
};
AC.addEventListener('click', clearAll);

//sign set function
let sign = document.getElementById('sign')
let signSet = () => {
    let txt = [ ...res.innerHTML ];
    if (txt[0] !== "-") {
        txt.unshift("-");
    } else {
        txt.shift();
    }
    res.innerHTML = txt.join('');
    if (!data[1]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    };
};
sign.addEventListener('click', signSet);

//percent function
let percent = document.getElementById('percent');
let percentage = () => {
    res.innerHTML = parseFloat(parseFloat(res.innerHTML) / 100);
    if (!data[1]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    };
};
percent.addEventListener('click', percentage);

//dot function
let dot = document.getElementById('dot');
let dotSet = () => {
    if (res.innerHTML === "") {
        res.innerHTML = "0."
    } else {
        res.innerHTML = res.innerHTML + '.'
    }
    if (!data[1]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    };
};
dot.addEventListener('click', dotSet)

//addition function
let plus = document.getElementById('add');

let addition = (event) => {
    if (!!data[2]) {
        data[0] = resCall();
    } else {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    }
    data[1] = '+';
    res.innerHTML = '';
};

plus.addEventListener('click', addition);

//Substraction Function
let substract = document.getElementById('substract');

let substraction = (event) => {
    if (!!data[2]) {
        data[0] = resCall();
    } else {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    }
    data[1] = '-';
    res.innerHTML = '';
};

substract.addEventListener('click', substraction);

//Multiplication Function
let multiply = document.getElementById('multiply');

let multiplication = (event) => {
    if (!!data[2]) {
        data[0] = resCall();
    } else {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    }
    data[1] = '*';
    res.innerHTML = '';
};

multiply.addEventListener('click', multiplication);

//Division Function
let divide = document.getElementById('divide');

let division = (event) => {
    if (!!data[2]) {
        data[0] = resCall();
    } else {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    }
    data[1] = '/';
    res.innerHTML = '';
};

divide.addEventListener('click', division);

//Result Call
let equal = document.getElementById('equal');

let resCall = () => {
    if (data[1] === "+") {
        data[0] = data[0] + data[2];
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "-") {
        data[0] = data[0] - data[2];
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "*") {
        data[0] = data[0] * data[2];
        data.pop();
        res.innerHTML = data[0];
    } else if (data[1] === "/") {
        data[0] = data[0] / data[2];
        data.pop();
        res.innerHTML = data[0];
    }
    return data[0];
};

equal.addEventListener('click', resCall);

//delete function
let del = document.getElementById('delete')
let backspace = () => {
    let txt = [ ...res.innerHTML ];
    let emptyTxt = [];
    if (txt !== emptyTxt) {
        txt.pop();
    } else {
        txt = [];
    }
    res.innerHTML = txt.join('');
    if (!data[1]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    };
};
del.addEventListener('click', backspace);

//keyboard support
let keyDetect = (event) => {
    const operators = ["+", "-", "*", "/", ".", "%", "Backspace","="];
    if (isFinite(event.key)) {
        res.innerHTML = res.innerHTML + event.key;
        if (!data[1]) {
            data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        } else {
            data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        };
    } else if (operators.includes(event.key) && !!data[0]) {
        event.key === operators[0] ? addition()
            : event.key === operators[1] ? substraction()
            : event.key === operators[2] ? multiplication()
            : event.key === operators[3] ? division()
            : event.key === operators[4] ? dotSet()
            : event.key === operators[5] ? percentage()
            : event.key === operators[6] ? backspace()
            : resCall();
    } else {
        res.innerHTML = res.innerHTML;
    };
};
document.addEventListener('keydown', keyDetect)