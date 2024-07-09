let scope = document.querySelector('#scope');
let calcBtn = document.querySelector('#calc-btn');
let result = document.querySelector('#result');
let currentScope = document.querySelector('#current-scope');
let currentLevel = document.querySelector('#current-level');

result.classList.add('d-none')

const ifSolution = (value) => {
    let level = '不及格';

    // issue fix.
    if (value >= 90) {
        level = '甲';
    }

    if (value >= 80) {
        level = '乙';
    }

    if (value >= 70) {
        level = '丙';
    }

    if (value >= 60) {
        level = '丁';
    }

    return level;
}

const switchSolution = (value) => {
    value = Math.floor(value / 10);
    let level = '不及格'
    switch (value) {
        case 10:
        case 9:
            level = '甲';
            break;
        case 8:
            level = '乙';
            break;
        case 7:
            level = '丙';
            break;
        case 6:
            level = '丁'
            break;
    }
    return level;
}

const mappingSolution = (value) => {
    value = Math.floor(value / 10);
    let map = {
        10: '甲',
        9: '甲',
        8: '乙',
        7: '丙',
        6: '丁',
    }

    return map[value] ? map[value] : '不及格'
}

const calc = () => {
    let value = scope.value;
    let level = ifSolution(value);
    // let level = switchSolution(value);
    // let level = mappingSolution(value);


    // 實作等及判斷

    // a. >= 90 甲
    // b. >= 80 乙
    // c. >= 70 丙
    // d. >= 60 丁
    // e. < 60 不及格

    currentLevel.innerHTML = level;
    currentScope.innerHTML = value;
    result.classList.remove('d-none');
}

calcBtn.addEventListener('click', () => {
    calc();
})

scope.addEventListener('keyup', (e) => {
    if (e.key.toUpperCase() == 'ENTER') {
        calc();
    }
})