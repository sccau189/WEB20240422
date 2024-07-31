class Storage {
    static getUid() {
        return localStorage.getItem('todo-app-uid');
    }

    static setUid(uid) {
        localStorage.setItem('todo-app-uid', uid);
    }

    static setData(uid, data) {
        data = JSON.stringify(data);
        localStorage.setItem(`todo-app-${uid}`, data)
    }

    static getData(uid) {
        let str = localStorage.getItem(`todo-app-${uid}`);
        if (str) {
            return JSON.parse(str);
        }
        return [];
    }
}

export { Storage }