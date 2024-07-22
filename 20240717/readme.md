# 20240717

## XMLHttpRequest

- `xml_request.html`
- `xml_request.js`

## fetch

- `fetch_request.html`
- `fetch_request.js`

## fetch GET POST 整理

```js
const doGet = async (url) => {
    let response = await fetch(url);
    return await response.json();
}

const doPost = async (url) => {
    let params = {
        action: 'demo',
        data: { a: 1, b: 2 }
    };

    let options = {
        method: 'POST',
        body: JSON.stringify(params)
    };

    let response = await fetch(url, options);
    return await response.json();
}
```

## 抓取檔案

```js
let url = 'https://book.niceinfos.com/frontend/api/';
let file = domFile.files[0];
let type = file.type.split('/');
if (type[0] != 'image') {
    Swal.fire({
        title: '格式錯誤',
        html: '只允許圖片類型',
        icon: 'error'
    })
    domFile.value = '';
    return;
}

console.log(file);
```

## 圖片預覽與大小限制

```js
const previewImage = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader;
        reader.onload = () => {
            return resolve(reader.result)
        }
        reader.readAsDataURL(file); // base64 encode 非加密

        // encrypt 加密
    })
}

domUpload.addEventListener('click', async () => {
    let url = 'https://book.niceinfos.com/frontend/api/';
    let file = domFile.files[0];

    if (!file) {
        return;
    }

    let type = file.type.split('/');
    if (type[0] != 'image') {
        Swal.fire({
            title: '格式錯誤',
            html: '只允許圖片類型',
            icon: 'error'
        })
        domFile.value = '';
        return;
    }

    let sizeMB = file.size / 1024 / 1024;

    if (sizeMB > 5) {
        Swal.fire({
            title: '圖片太大了',
            html: '只允許5MB以下圖片',
            icon: 'error'
        })
        return;
    }

    console.log(file);
    let preview = await previewImage(file);
    console.log(preview);
    domPreview.src = preview;
})
```

## 圖片上傳

```js
const doUploadFile = async (url, file) => {
    if (!file) {
        return;
    }

    let form = new FormData();
    form.append('action', 'upload');
    form.append('file', file);
    // <input type="hidden" name="action" value="upload">
    // <input type="file" name="file">

    let options = {
        method: 'POST',
        body: form,
    }

    let response = await fetch(url, options);
    return await response.json();
}
```

## 雲端 TODO API

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

(async () => {
    let api = new TodoAPI('aaaa');
    let r = await api.read();
    console.log(r);

    // let w = await api.write([{ a: 1 }, { a: 2 }]);
    // console.log(w);
})();
```