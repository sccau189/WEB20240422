let uid = '';

class TodoStorage {
    static write(data) {
        data = JSON.stringify(data);
        localStorage.setItem(this.key(), data)
    }

    /**
     * 
     * @returns array
     */
    static read() {
        let str = localStorage.getItem(this.key());
        if (str) {
            return JSON.parse(str);
        }
        return [];
    }

    static key() {
        return `todo-app-${uid}`
    }

    static setUid(str) {
        uid = str
    }
}

export { TodoStorage }