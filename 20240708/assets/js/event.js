let cBtn = document.querySelector('#c-btn');
let cLink = document.querySelector('#c-link');

const clickType = 'click'
const clickCallback = () => {
    console.log('clicked.')
}

cBtn.addEventListener(clickType, clickCallback)
cLink.addEventListener(clickType, clickCallback)

// cBtn.addEventListener(clickType, () => {
//     console.log('clicked.')
// })

let chAccount = document.querySelector('#ch-account');

const filterAccount = () => {
    chAccount.value = chAccount.value.substr(0, 8);
}



chAccount.addEventListener('blur', () => {
    console.log(`trigger blur value is: ${chAccount.value}`)
})

chAccount.addEventListener('change', () => {
    filterAccount();
})

chAccount.addEventListener('keypress', () => {
    console.log(`trigger keypress value is: ${chAccount.value}`)
})

chAccount.addEventListener('keyup', (e) => {
    console.log(e.key);
    filterAccount();
})