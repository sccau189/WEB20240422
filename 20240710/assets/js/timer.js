let callback = () => {
    console.log('run');
}

let setTimeoutNum = '';
let run1 = document.querySelector('#run1');

run1.addEventListener('click', () => {
    // 清除特定編號計時器
    clearTimeout(setTimeoutNum);
    console.log('start setTimeout 3000ms')

    // 單位為 ms
    let second = 3000; // 1s = 1000ms

    setTimeoutNum = setTimeout(callback, second)
    console.log(setTimeoutNum);
})

let setIntervalNum = '';
let run2 = document.querySelector('#run2');

run2.addEventListener('click', () => {
    // 清除特定編號計時器
    clearTimeout(setIntervalNum);
    console.log('start setInterval 1000ms')

    // 單位為 ms
    let second = 1000; // 1s = 1000ms

    setIntervalNum = setInterval(callback, second)
    console.log(setIntervalNum);
})