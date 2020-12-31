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

function CalBtn_Click() {
    CountGift();
}


function add_Data(num, n1, n2, n3, gift) {
    data = document.querySelector('#data');
    data.innerHTML +=
        "<div class=\"row\">" +
        "<div class=\"data count\">【" + num + "】</div>" +
        "<div class=\"data\">" + n1 + "</div>" +
        "<div class=\"data\">" + n2 + "</div>" +
        "<div class=\"data\">" + n3 + "</div>" +
        "<div class=\"data\">" + gift + "</div>" +
        "</div>";
}


function CountGift() {
    var price = parseInt(document.querySelector('#showtext').innerHTML);
    var big_gift = Math.floor(price / 8800);
    var mid_gift = Math.floor(price / 5800);
    var small_gift = Math.floor(price / 3800);
    var count = 0;
    var giftcount = 0;

    for (i = big_gift; i >= 0; i--) {
        for (j = mid_gift; j >= 0; j--) {
            if ((price - i * 8800 - j * 5800) >= 0) {
                small_gift = Math.floor((price - i * 8800 - j * 5800) / 3800);
                giftcount = i * 3 + j * 2 + small_gift * 1;

                add_Data(count += 1, small_gift, j, i, giftcount);
            }
        }
    }
}