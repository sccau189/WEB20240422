# 20240715

## TODO增加項目到列表

```js
const generateIndex = () => {
    return Math.floor(Math.random() * 1000);
}

const originLi = (name) => {
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label');

    let index = generateIndex();
    checkbox.type = 'checkbox';
    checkbox.id = `todo-item-${index}`;
    label.innerHTML = name;
    label.htmlFor = `todo-item-${index}`;

    li.appendChild(checkbox);
    li.appendChild(label);
    return li;
}

const strLi = (name) => {
    let index = generateIndex();
    return `<li>
        <input type="checkbox" id="todo-item-${index}">
        <label for="todo-item-${index}">${name}</label>
    </li>`
}

const addItem = (name) => {
    // let li = originLi(name);
    // todo.appendChild(li);


    let li = strLi(name);
    todo.innerHTML += li;
}
```

## local storage

寫入

```js
localStorage.setItem('key', 'value');
```

讀取

```js
localStorage.getItem('key');
```

todo 擴充

```js
const save = (data) => {
    localStorage.setItem('todo-app', data);
}

const restore = () => {
    let data = localStorage.getItem('todo-app');
    todo.innerHTML = data;
}


restore();
```

## todo storage class

方便在不同頁面上取得共同資料

`TodoStorage.js`

使用方式

```html
<script type="module">
    import { TodoStorage } from './assets/js/TodoStorage.js'

    let data = TodoStorage.read();
    console.log(data);
</script>
```

## todo data class

`TodoApp.js`

## todo data and storage combine

`TodoApp.js`

`TodoStorage.js`

## todo checked storage

`TodoApp.js`

## todo add uid

`todo.js`
`TodoApp.js`
`TodoStorage.js`

## todo uid auth and logout

`todo.html`
`todo.css`
`TodoApp.js`