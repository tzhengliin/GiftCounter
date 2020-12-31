var num1 = 0;
var num2 = 0;
var caltemp = '';

function buttonclick(num) {
    console.log('click');
    text = document.querySelector('#showtext');
    if (num1 == 0 | check_calBtn() == false) {
        text.innerHTML = num;
        document.querySelector('#plus').style.background = "aqua";
        document.querySelector('#minus').style.background = "aqua";
        document.querySelector('#cross').style.background = "aqua";
        document.querySelector('#division').style.background = "aqua";
    } else {
        text.innerHTML += num;
    }
    if (caltemp == '') {
        num1 = parseInt(text.innerHTML);
    } else {
        num2 = parseInt(text.innerHTML);
    }
}


function calclick(cal) {
    nowvalue = document.querySelector('#showtext');
    switch (cal) {
        case '+':
            console.log('+');
            if (num1 == 0) num1 = nowvalue.innerHTML;
            if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
            caltemp = '+';
            calbtn = document.querySelector('#plus');
            calbtn.style.background = 'gray';
            break;
        case '-':
            console.log('-');
            if (num1 == 0) num1 = nowvalue.innerHTML;
            if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
            caltemp = '-';
            calbtn = document.querySelector('#minus');
            calbtn.style.background = 'gray';
            break;
        case '*':
            console.log('*');
            if (num1 == 0) num1 = nowvalue.innerHTML;
            if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
            caltemp = '*';
            calbtn = document.querySelector('#cross');
            calbtn.style.background = 'gray';
            break;
        case '/':
            console.log('/');
            if (num1 == 0) num1 = nowvalue.innerHTML;
            if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
            caltemp = '/';
            calbtn = document.querySelector('#division');
            calbtn.style.background = 'gray';
            break;
        case '=':
            console.log('=');
            if (num1 != 0 & caltemp != '') {
                num2 = nowvalue.innerHTML;
                nowvalue.innerHTML = calulate(num1, num2, caltemp);
            }
            num1 = 0;
            num2 = 0;
            caltemp = '';
            break;
        case '<':
            console.log('<');
            var str = nowvalue.innerHTML;
            nowvalue.innerHTML = str.substr(0, str.length - 1);
            break;
    }
}

function calulate(num1, num2, cal) {
    switch (cal) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '*':
            return parseInt(num1) * parseInt(num2);
        case '/':
            return parseInt(num1) / parseInt(num2);
    }

}

function check_calBtn() {
    plus = document.querySelector('#plus');
    minus = document.querySelector('#minus');
    cross = document.querySelector('#cross');
    division = document.querySelector('#division');
    if (plus.style.background == "gray") return false;
    if (minus.style.background == "gray") return false;
    if (cross.style.background == "gray") return false;
    if (division.style.background == "gray") return false;
}