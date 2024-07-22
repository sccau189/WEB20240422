import { TodoApp } from "./TodoApp.js";



let itemName = document.querySelector('#item-name');
let addBtn = document.querySelector('#add-btn');
let todo = document.querySelector('#todo-item');

TodoApp.init(todo);
const generateId = () => {
    return Math.floor(Math.random() * 1000);
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

    TodoApp.add(generateId(), value);
    todo.innerHTML = TodoApp.html();

    // 輸入框內容清空
    itemName.value = '';
    itemName.focus();
});

todo.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        let index = target.id.replace('todo-item-', '');
        let checked = target.checked;
        TodoApp.setChecked(index, checked);
    }
})








// const generateIndex = () => {
//     return Math.floor(Math.random() * 1000);
// }

// const originLi = (name) => {
//     let li = document.createElement('li')
//     let checkbox = document.createElement('input')
//     let label = document.createElement('label');

//     let index = generateIndex();
//     checkbox.type = 'checkbox';
//     checkbox.id = `todo-item-${index}`;
//     label.innerHTML = name;
//     label.htmlFor = `todo-item-${index}`;

//     li.appendChild(checkbox);
//     li.appendChild(label);
//     return li;
// }

// const strLi = (name) => {
//     let index = generateIndex();
//     return `<li>
//         <input type="checkbox" id="todo-item-${index}">
//         <label for="todo-item-${index}">${name}</label>
//     </li>`
// }

// const addItem = (name) => {
//     // let li = originLi(name);
//     // todo.appendChild(li);


//     let li = strLi(name);
//     todo.innerHTML += li;
//     save(todo.innerHTML);
// }

// addBtn.addEventListener('click', async () => {
//     let value = itemName.value;
//     if (!value) {
//         await Swal.fire({
//             title: '新增失敗',
//             html: '尚未輸入項目名稱',
//             icon: 'error'
//         })
//         console.log(123);
//         setTimeout(() => {
//             itemName.focus();
//         }, 500)
//         return;
//     }
//     addItem(value);

//     // 輸入框內容清空
//     itemName.value = '';
//     itemName.focus();
// });

// const save = (data) => {
//     TodoStorage.write(data);
//     // localStorage.setItem('todo-app', data);
// }

// const restore = () => {
//     // let data = localStorage.getItem('todo-app');
//     let data = TodoStorage.read();
//     todo.innerHTML = data;
// }


// restore();

// let todoItem = {
//     name: '',
//     id: '',
//     checked: false
// }

// let todos = [];

// todos.push(todoItem);