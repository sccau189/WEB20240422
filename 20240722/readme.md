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

## Vuejs 掛載

- `vue_app.html`
- `assers/js/vue/todo.js`

```js
const options = {
    data() {
        return {
            user: 'David'
        }
    },
    methods: {

    },
    mounted() {
        console.log('is mounted.');
    }
};

Vue.createApp(options).mount('#todo-app');
```

## Vue todo 列表資料綁定

```html
 <div class="border p-2">
    <div class="mb-2">代辦列表</div>
    <ul class="list-group">
        <template v-for="(item, index) in database">
            <li class="list-group-item">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" :id="`todo-item-${index}`"
                        :checked="item.checked">
                    <label :for="`todo-item-${index}`" class="form-check-label">{{ item.name }}</label>
                </div>
            </li>
        </template>
    </ul>
</div>
```

```js
const options = {
    data() {
        return {
            newItem: '',
            database: [],
        }
    },
    methods: {

    },
    mounted() {
        console.log('is mounted.');
        this.database.push({
            id: 1,
            name: 'Test1',
            checked: false
        })

        this.database.push({
            id: 2,
            name: 'Test2',
            checked: true
        })

        this.database.push({
            id: 3,
            name: 'Test3',
            checked: true
        })

        console.log(this.database);
    }
};

Vue.createApp(options).mount('#todo-app');
```

## Vue 事件綁定

```html
<button class="btn btn-primary w-100" @click="add">加入</button>
```

```js
const options = {
    data() {
        return {
            newItem: '',
            database: [],
        }
    },
    methods: {
        add() {
            console.log('add');
            let id = Math.floor(Math.random() * 10000)
            this.database.push({
                id: id,
                name: this.newItem,
                checked: false
            })
            this.newItem = '';
            this.$refs.new_item.focus()
        }
    },
    mounted() {
        console.log('is mounted.');
        this.database.push({
            id: 1,
            name: 'Test1',
            checked: false
        })

        this.database.push({
            id: 2,
            name: 'Test2',
            checked: true
        })

        this.database.push({
            id: 3,
            name: 'Test3',
            checked: true
        })
    }
};

Vue.createApp(options).mount('#todo-app');
```

## Vue 參考 DOM

```html
<input type="text" class="form-control" placeholder="輸入項目" v-model="newItem" ref="new_item">
```

## Vue localStorage 改寫

- `assets/js/vue/Storage.js`

```js
import { Storage } from "./Storage.js";

const options = {
    data() {
        return {
            newItem: '',
            database: [],
            uid: '',
        }
    },
    methods: {
        add() {
            console.log('add');
            let id = Math.floor(Math.random() * 10000)
            this.database.push({
                id: id,
                name: this.newItem,
                checked: false
            })
            this.newItem = '';
            this.$refs.new_item.focus()
            this.save();
        },
        async initUid() {
            while (!this.uid) {
                let result = await Swal.fire({
                    title: '輸入 UID',
                    input: 'text'
                })

                if (result.value) {
                    this.uid = result.value;
                }
            }

            Storage.setUid(this.uid);
            this.load();
        },
        load() {
            this.database = Storage.getData(this.uid);
        },
        save() {
            Storage.setData(this.uid, this.database);
        },
        setChecked(item) {
            // Call by reference.
            console.log('reference!!!')
            item.checked = !item.checked;
            this.save();
        },
        setCheckedIndex(index) {
            console.log('index!!!!');
            this.database[index].checked = !this.database[index].checked;
            this.save();
        }
    },
    mounted() {
        console.log('is mounted.');
        this.uid = Storage.getUid();
        if (!this.uid) {
            this.initUid();
        } else {
            this.load();
        }
    }
};

Vue.createApp(options).mount('#todo-app');
```

## Homework

實作上傳與下載數據

- API.js