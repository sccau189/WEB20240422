let n1 = 0;
let n2 = 0;
let op = '';

let result = document.querySelector('#result');

const setResult = () => {
    let html = n1;
    if (op) {
        html += op;
        if (n2) {
            html += n2;
        }
    }

    result.innerHTML = html;
}

const appendNumber = (num) => {
    num = num.toString();
    if (op) {
        n2 += num;
        n2 = +n2;
    } else {
        n1 += num;
        n1 = +n1;
    }

    setResult();
}

const runCalc = () => {
    if (!n1 || !n2 || !op) {
        return;
    }

    let total = 0;

    switch (op) {
        case '+':
            total = n1 + n2;
            break;

        case '-':
            total = n1 - n2;
            break;

        case '*':
            total = n1 * n2;
            break;

        case '/':
            total = n1 / n2;
            break;
    }

    n1 = total;
    n2 = 0;
    op = '';
    setResult();
}

const reset = () => {
    n1 = 0;
    n2 = 0;
    op = '';
    setResult();
}

document.addEventListener('keyup', (e) => {
    let key = e.key;
    if (key >= 0 && key <= 9) {
        appendNumber(key);
    }

    if (key == '+' || key == '-' || key == '*' || key == '/') {
        op = key;
        setResult();
    }

    if (key.toUpperCase() == 'ENTER') {
        runCalc()
    }

    if (key.toUpperCase() == 'C') {
        reset();
    }
})