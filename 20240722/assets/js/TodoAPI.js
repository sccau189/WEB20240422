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