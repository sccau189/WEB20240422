let num0 = document.querySelector('#num0');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let num6 = document.querySelector('#num6');
let num7 = document.querySelector('#num7');
let num8 = document.querySelector('#num8');
let num9 = document.querySelector('#num9');
let sp1 = document.querySelector('#sp1');
let sp2 = document.querySelector('#sp2');
let sp3 = document.querySelector('#sp3');
let sp4 = document.querySelector('#sp4');
let reset = document.querySelector('#reset');
let run = document.querySelector('#run');

let result = document.querySelector('#result');

let n1 = 0;
let n2 = 0;
let op = '';

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

num0.addEventListener('click', () => {
    if (op) {
        n2 += '0';
        n2 = +n2;
    } else {
        n1 += '0';
        n1 = +n1;
    }

    setResult();

    // result.innerHTML += 0;
    // result.innerHTML = +result.innerHTML;
    console.log(0);
})

num1.addEventListener('click', () => {
    if (op) {
        n2 += '1';
        n2 = +n2;
    } else {
        n1 += '1';
        n1 = +n1;
    }

    setResult();

    // result.innerHTML += 1;
    // result.innerHTML = +result.innerHTML;
    console.log(1);
})

num2.addEventListener('click', () => {
    result.innerHTML += 2;
    result.innerHTML = +result.innerHTML;
    console.log(2);
})

num3.addEventListener('click', () => {
    result.innerHTML += 3;
    result.innerHTML = +result.innerHTML;
    console.log(3);
})

num4.addEventListener('click', () => {
    result.innerHTML += 4;
    result.innerHTML = +result.innerHTML;
    console.log(4);
})

num5.addEventListener('click', () => {
    result.innerHTML += 5;
    result.innerHTML = +result.innerHTML;
    console.log(5);
})

num6.addEventListener('click', () => {
    result.innerHTML += 6;
    result.innerHTML = +result.innerHTML;
    console.log(6);
})

num7.addEventListener('click', () => {
    result.innerHTML += 7;
    result.innerHTML = +result.innerHTML;
    console.log(7);
})

num8.addEventListener('click', () => {
    result.innerHTML += 8;
    result.innerHTML = +result.innerHTML;
    console.log(8);
})

num9.addEventListener('click', () => {
    result.innerHTML += 9;
    result.innerHTML = +result.innerHTML;
    console.log(9);
})

sp1.addEventListener('click', () => {
    op = '/';
    setResult();
    console.log('sp1');
})

sp2.addEventListener('click', () => {
    op = '*';
    setResult();
    console.log('sp2');
})

sp3.addEventListener('click', () => {
    op = '-';
    setResult();
    console.log('sp3');
})

sp4.addEventListener('click', () => {
    op = '+';
    setResult();
    console.log('sp4');
})

reset.addEventListener('click', () => {
    n1 = 0;
    n2 = 0;
    op = '';
    setResult();
    console.log('reset');
})

run.addEventListener('click', () => {
    console.log('run');
})

