class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement, data) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.data = data
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }

    add_Data(num, n1, n2, n3, gift) {
        this.data.innerHTML +=
            "<div class=\"row\">" +
            "<div class=\"data count\">【" + num + "】</div>" +
            "<div class=\"data\">" + n1 + "</div>" +
            "<div class=\"data\">" + n2 + "</div>" +
            "<div class=\"data\">" + n3 + "</div>" +
            "<div class=\"data\">" + gift + "</div>" +
            "</div>";
    }


    CountGift() {
        this.data.innerHTML = '';
        var price = this.currentOperand;
        var big_gift = Math.floor(price / 8800);
        var mid_gift = Math.floor(price / 5800);
        var small_gift = Math.floor(price / 3800);
        var count = 0;
        var giftcount = 0;

        for (var i = big_gift; i >= 0; i--) {
            for (var j = mid_gift; j >= 0; j--) {
                if ((price - i * 8800 - j * 5800) >= 0) {
                    small_gift = Math.floor((price - i * 8800 - j * 5800) / 3800);
                    giftcount = i * 3 + j * 2 + small_gift * 1;

                    this.add_Data(count += 1, small_gift, j, i, giftcount);
                }
            }
        }
    }




}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const queryButton = document.querySelector('[data-count]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const data = document.querySelector('[data]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, data)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

queryButton.addEventListener('click', button => {
    calculator.CountGift()
})





// var num1 = 0;
// var num2 = 0;
// var caltemp = '';

// function buttonclick(num) {
//     console.log('click');
//     text = document.querySelector('#showtext');
//     if (num1 == 0 | check_calBtn() == false) {
//         text.innerHTML = num;
//         document.querySelector('#plus').style.background = "aqua";
//         document.querySelector('#minus').style.background = "aqua";
//         document.querySelector('#cross').style.background = "aqua";
//         document.querySelector('#division').style.background = "aqua";
//     } else {
//         text.innerHTML += num;
//     }
//     if (caltemp == '') {
//         num1 = parseInt(text.innerHTML);
//     } else {
//         num2 = parseInt(text.innerHTML);
//     }
// }


// function calclick(cal) {
//     nowvalue = document.querySelector('#showtext');
//     switch (cal) {
//         case '+':
//             console.log('+');
//             if (num1 == 0) num1 = nowvalue.innerHTML;
//             if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
//             caltemp = '+';
//             calbtn = document.querySelector('#plus');
//             calbtn.style.background = 'gray';
//             break;
//         case '-':
//             console.log('-');
//             if (num1 == 0) num1 = nowvalue.innerHTML;
//             if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
//             caltemp = '-';
//             calbtn = document.querySelector('#minus');
//             calbtn.style.background = 'gray';
//             break;
//         case '*':
//             console.log('*');
//             if (num1 == 0) num1 = nowvalue.innerHTML;
//             if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
//             caltemp = '*';
//             calbtn = document.querySelector('#cross');
//             calbtn.style.background = 'gray';
//             break;
//         case '/':
//             console.log('/');
//             if (num1 == 0) num1 = nowvalue.innerHTML;
//             if (num2 != 0) num1 = nowvalue.innerHTML = calulate(num1, num2, caltemp);
//             caltemp = '/';
//             calbtn = document.querySelector('#division');
//             calbtn.style.background = 'gray';
//             break;
//         case '=':
//             console.log('=');
//             if (num1 != 0 & caltemp != '') {
//                 num2 = nowvalue.innerHTML;
//                 nowvalue.innerHTML = calulate(num1, num2, caltemp);
//             }
//             num1 = 0;
//             num2 = 0;
//             caltemp = '';
//             break;
//         case '<':
//             console.log('<');
//             var str = nowvalue.innerHTML;
//             nowvalue.innerHTML = str.substr(0, str.length - 1);
//             break;
//     }
// }

// function calulate(num1, num2, cal) {
//     switch (cal) {
//         case '+':
//             return parseInt(num1) + parseInt(num2);
//         case '-':
//             return parseInt(num1) - parseInt(num2);
//         case '*':
//             return parseInt(num1) * parseInt(num2);
//         case '/':
//             return parseInt(num1) / parseInt(num2);
//     }

// }

// function check_calBtn() {
//     plus = document.querySelector('#plus');
//     minus = document.querySelector('#minus');
//     cross = document.querySelector('#cross');
//     division = document.querySelector('#division');
//     if (plus.style.background == "gray") return false;
//     if (minus.style.background == "gray") return false;
//     if (cross.style.background == "gray") return false;
//     if (division.style.background == "gray") return false;
// }

// function CalBtn_Click() {

//     data = document.querySelector('#data');
//     data.innerHTML = "";
//     CountGift();
// }


// function add_Data(num, n1, n2, n3, gift) {
//     data = document.querySelector('#data');
//     data.innerHTML +=
//         "<div class=\"row\">" +
//         "<div class=\"data count\">【" + num + "】</div>" +
//         "<div class=\"data\">" + n1 + "</div>" +
//         "<div class=\"data\">" + n2 + "</div>" +
//         "<div class=\"data\">" + n3 + "</div>" +
//         "<div class=\"data\">" + gift + "</div>" +
//         "</div>";
// }


// function CountGift() {
//     var price = parseFloat(this.currentOperandTextElement.innerText);
//     var big_gift = Math.floor(price / 8800);
//     var mid_gift = Math.floor(price / 5800);
//     var small_gift = Math.floor(price / 3800);
//     var count = 0;
//     var giftcount = 0;

//     for (i = big_gift; i >= 0; i--) {
//         for (j = mid_gift; j >= 0; j--) {
//             if ((price - i * 8800 - j * 5800) >= 0) {
//                 small_gift = Math.floor((price - i * 8800 - j * 5800) / 3800);
//                 giftcount = i * 3 + j * 2 + small_gift * 1;

//                 add_Data(count += 1, small_gift, j, i, giftcount);
//             }
//         }
//     }
// }