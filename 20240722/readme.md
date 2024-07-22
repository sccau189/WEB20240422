# 20240722

## TODO API 資料同步 UI 元件

```html
<div class="api-fn">
    <button id="upload-btn" class="api-btn">上傳數據</button>
    <button id="download-btn" class="api-btn">下載數據</button>
</div>
```

```css
.api-fn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}

.api-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3fd811;
    height: 40px;
    background: #3fd811;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s;
    padding: 0 20px;
}

.api-btn:hover {
    background: #35af10;
}
```

```js

let uploadBtn = document.querySelector('#upload-btn');
let downloadBtn = document.querySelector('#download-btn');

uploadBtn.addEventListener('click', () => {
    console.log('upload data...')
    console.log(TodoApp.getUid());
});

downloadBtn.addEventListener('click', () => {
    console.log('download data...')
    console.log(TodoApp.getUid());
});
```

`TodoAPI.js`

```js
class TodoAPI {
    #uid
    #api = 'https://book.niceinfos.com/frontend/api/'

    constructor(uid) {
        this.#uid = uid;
    }


    async read() {
        let api = `${this.#api}?action=todo&uid=${this.#uid}`
        let response = await fetch(api)
        return response.json();
    }

    async write(data) {
        let api = `${this.#api}`
        let params = {
            action: 'todo',
            uid: this.#uid,
            data: data,
        }
        let options = {
            method: 'POST',
            body: JSON.stringify(params)
        }
        let response = await fetch(api, options);
        return response.json();
    }
}

export { TodoAPI }
```

## API 雲端同步實作

- `todo.html`
- `todo.js`


## Vuejs 初始化

https://vuejs.org/guide/quick-start.html

正式

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
```

開發

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```