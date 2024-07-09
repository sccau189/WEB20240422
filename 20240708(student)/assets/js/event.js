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

// chAccount.addEventListener('change', () => {
//     let value = chAccount.value;
//     console.log(value.length);
//     if (value.length > 8) {
//         alert('超過8個了喔!')
//         value = value.substr(0, 8);
//         chAccount.value = value
//     }
//     console.log(`trigger change value is: ${chAccount.value}`)
// })

chAccount.addEventListener('blur', () => {
    console.log(`trigger blur value is: ${chAccount.value}`)
})

chAccount.addEventListener('change', () => {
    chAccount.value = chAccount.value.substr(0, 8);
})

chAccount.addEventListener('keypress', () => {
    console.log(`trigger keypress value is: ${chAccount.value}`)
})

chAccount.addEventListener('keyup', () => {
    console.log(`trigger keyup value is: ${chAccount.value}`)
    // 實作 8位數過濾
})