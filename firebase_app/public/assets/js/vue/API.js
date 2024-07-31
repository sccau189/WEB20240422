class API {
    static base() {
        return 'https://book.niceinfos.com/frontend/api/';
    }

    static async read(uid) {
        let api = `${this.base()}?action=todo&uid=${uid}`
        let response = await fetch(api)
        return response.json();
    }

    static async write(uid, data) {
        let api = this.base();
        let params = {
            action: 'todo',
            uid: uid,
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

export { API }