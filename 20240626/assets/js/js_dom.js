let onlyItem = document.querySelector('#only-item');
console.log('單選唯一');
console.log(onlyItem);

let listItems = document.querySelector('#item-list li');
console.log('單選多個');
console.log(listItems);

let listItems2 = document.querySelectorAll('#item-list li');
console.log('多選多個');
console.log(listItems2);

let onlyItem2 = document.querySelectorAll('#only-item');
console.log('多選唯一');
console.log(onlyItem2);

let onlyItemText = onlyItem.innerHTML;
console.log('onlyItem 現在的內容是: ' + onlyItemText);
console.log(`onlyItem 現在的內容是: ${onlyItemText}`);

let onlyItemValue = onlyItem.value;
console.log(`onlyItem 現在的數值是: ${onlyItemValue}`);

let accountInput = document.querySelector('#account');
let accountText = accountInput.innerHTML;
let accountValue = accountInput.value;
console.log(`accountInput 現在的內容: ${accountText}`);
console.log(`accountInput 現在的數值: ${accountValue}`);

let getAccountBtn = document.querySelector('#get-account');
getAccountBtn.addEventListener('click', () => {
    let currentValue = accountInput.value;
    console.log(`Current value is: ${currentValue}`);
})