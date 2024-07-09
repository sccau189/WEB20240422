let num1Input = document.querySelector('#num-1');
let num2Input = document.querySelector('#num-2');

let calc1Btn = document.querySelector('#calc-1');
let calc2Btn = document.querySelector('#calc-2');
let calc3Btn = document.querySelector('#calc-3');
let calc4Btn = document.querySelector('#calc-4');
let calc5Btn = document.querySelector('#calc-5');

let typeSelect = document.querySelector('#type');

let response = document.querySelector('#response');

const getNum = () => {
    response.classList.add('d-none');
    response.classList.remove('d-block');

    let n1 = num1Input.value;
    let n2 = num2Input.value;

    // equal ==
    if (n1 == '') {
        alert('數字1未填寫');
        num1Input.focus();
        return false;
    }

    if (n2 == '') {
        alert('數字2未填寫');
        num2Input.focus();
        return false;
    }

    return [+n1, +n2]
}

const done = () => {
    response.classList.add('d-block');
    response.classList.remove('d-none');
    num1Input.value = '';
    num2Input.value = '';
}

const addCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    let result = num[0] + num[1];
    response.innerHTML = `${num[0]} + ${num[1]} = ${result}`;
    done();
}

const substructCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    let result = num[0] - num[1];
    response.innerHTML = `${num[0]} - ${num[1]} = ${result}`;
    done();
}

const multiplyCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    let result = num[0] * num[1];
    response.innerHTML = `${num[0]} * ${num[1]} = ${result}`;
    done();
}

const dividedCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    if (num[1] == 0) {
        alert('分母不可為0');
        return false;
    }

    let result = num[0] / num[1];
    response.innerHTML = `${num[0]} / ${num[1]} = ${result}`;
    done();
}

const remainderCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    if (num[1] == 0) {
        alert('分母不可為0');
        return false;
    }

    let result = num[0] % num[1];
    response.innerHTML = `${num[0]} % ${num[1]} = ${result}`;
    done();
}


calc1Btn.addEventListener('click', addCalc);
calc2Btn.addEventListener('click', substructCalc);
calc3Btn.addEventListener('click', multiplyCalc);
calc4Btn.addEventListener('click', dividedCalc);
calc5Btn.addEventListener('click', remainderCalc);

const typeIfSolution = (type) => {
    if (type == '+') {
        addCalc();
    }

    if (type == '-') {
        substructCalc();
    }

    if (type == '*') {
        multiplyCalc()
    }

    if (type == '/') {
        dividedCalc();
    }

    if (type == '%') {
        remainderCalc()
    }
}

const typeSwitchSolution = (type) => {
    switch (type) {
        case '+':
            addCalc();
            break;
        case '-':
            substructCalc();
            break;
        case '*':
            multiplyCalc();
            break;
        case '/':
            dividedCalc();
            break;
        case '%':
            remainderCalc();
            break;
        default:
            console.log('not match.');
    }
}

const typeHashSolution = (type) => {
    let hash = {
        '+': addCalc,
        '-': substructCalc,
        '*': multiplyCalc,
        '/': dividedCalc,
        '%': remainderCalc,
    };

    let calc = hash[type];
    if (calc) {
        calc();
    }
}

const runCalc = () => {
    let type = typeSelect.value;
    // typeIfSolution(type);
    // typeSwitchSolution(type);
    typeHashSolution(type);
}
typeSelect.addEventListener('change', runCalc);