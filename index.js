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
plus.addEventListener('click', event => {
    if (!!data[2]) {
        data[0] = data[0] + data[2]
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
    } else if (!data[0]) {
        data[0] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = event.target.innerHTML;
    } else {
        data[2] = parseFloat(parseFloat(res.innerHTML).toFixed(3));
        data[1] = '+';
    }
    res.innerHTML = '';
});