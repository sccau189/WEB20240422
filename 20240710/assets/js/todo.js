let itemName = document.querySelector('#item-name');
let addBtn = document.querySelector('#add-btn');

const addItem = (name) => {
    console.log(`add: ${name}`);
}

addBtn.addEventListener('click', async () => {
    let value = itemName.value;
    if (!value) {
        await Swal.fire({
            title: '新增失敗',
            html: '尚未輸入項目名稱',
            icon: 'error'
        })
        console.log(123);
        setTimeout(() => {
            itemName.focus();
        }, 500)
        return;
    }
    addItem(value);
});