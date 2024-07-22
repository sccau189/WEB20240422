let domSend = document.querySelector('#send');
let domResponse = document.querySelector('#response');
let domFile = document.querySelector('#upload-file');
let domUpload = document.querySelector('#upload');
let domPreview = document.querySelector('#preview');

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

domSend.addEventListener('click', async () => {
    console.log('send!');
    // let url = 'https://book.niceinfos.com/frontend/api/?action=sleep&timer=3';
    // let response = await doGet(url);
    // console.log(response);
    // domResponse.innerHTML = response.data;

    // let url = 'https://book.niceinfos.com/frontend/api/';
    // let response = await doPost(url);
    // console.log(response);
    // domResponse.innerHTML = JSON.stringify(response.data);



})

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


domUpload.addEventListener('click', async () => {
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

    let preview = await previewImage(file);
    domPreview.src = preview;

    let url = 'https://book.niceinfos.com/frontend/api/';
    let response = await doUploadFile(url, file);
    console.log(response);
})

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

