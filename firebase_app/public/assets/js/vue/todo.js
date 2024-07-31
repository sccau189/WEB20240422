import { Storage } from "./Storage.js";
import { App } from '../Firebase/App.js';
import { Database } from '../Firebase/Database.js';
import { Auth } from '../Firebase/Auth.js';

let config = {
    apiKey: "AIzaSyD7HJGuVqoFAsPA_lmDsHgmfeWtofgxj70",
    authDomain: "f20240422.firebaseapp.com",
    databaseURL: "https://f20240422-default-rtdb.firebaseio.com",
    projectId: "f20240422",
    storageBucket: "f20240422.appspot.com",
    messagingSenderId: "988898477453",
    appId: "1:988898477453:web:d224eedbb30c09eaa0a9c4"
};

let app = await App.init(config);
let database = new Database(app);
let auth = new Auth(app);

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const options = {
    data() {
        return {
            newItem: '',
            database: [],
            uid: '',
            isAuthed: false,
            authAccount: '',
            authPwd: '',
            currentEmail: '',
        }
    },
    methods: {
        add() {
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
            database.listen(`todo/${this.uid}`, (data, snapshot) => {
                if (!data) {
                    data = [];
                }
                this.database = data;
            })
        },
        save() {
            database.write(`todo/${this.uid}`, this.database)
        },
        setChecked(item) {
            // Call by reference.
            item.checked = !item.checked;
            this.save();
        },
        setCheckedIndex(index) {
            this.database[index].checked = !this.database[index].checked;
            this.save();
        },
        async doRegister() {
            if (!this.authAccount || !this.authPwd) {
                Swal.fire({
                    title: '註冊錯誤',
                    html: '未填寫帳號密碼',
                    icon: 'error'
                })
                return
            }

            if (!validateEmail(this.authAccount)) {
                Swal.fire({
                    title: '帳號錯誤',
                    html: '不合法的Email格式',
                    icon: 'error'
                })
                return
            }

            let response = await auth.register(this.authAccount, this.authPwd);
            if (response) {
                await Swal.fire({
                    title: '註冊成功',
                    html: '請使用帳號密碼登入',
                    icon: 'success'
                })
                this.doLogout();
            } else {
                Swal.fire({
                    title: '註冊錯誤',
                    html: '註冊失敗或帳號已存在',
                    icon: 'error'
                })
            }
        },
        async doAuth() {
            if (!this.authAccount || !this.authPwd) {
                Swal.fire({
                    title: '登入錯誤',
                    html: '未填寫帳號密碼',
                    icon: 'error'
                })
                return
            }

            if (!validateEmail(this.authAccount)) {
                Swal.fire({
                    title: '帳號錯誤',
                    html: '不合法的Email格式',
                    icon: 'error'
                })
                return
            }

            let response = await auth.signIn(this.authAccount, this.authPwd);
            if (response) {
                Swal.fire({
                    title: '登入成功',
                    html: '',
                    icon: 'success'
                })

            } else {
                Swal.fire({
                    title: '登入錯誤',
                    html: '登入失敗或尚未註冊',
                    icon: 'error'
                })
            }
        },
        async doLogout() {
            await auth.signOut();
            location.reload();
        }
    },
    mounted() {
        auth.onChange((user) => {
            this.isAuthed = true;
            this.currentEmail = user.email
            this.uid = user.uid;
            this.load();
        }, (user) => {
            this.isAuthed = false;
        })
    }
};

Vue.createApp(options).mount('#todo-app');