import { App } from './Firebase/App.js';
import { Auth } from './Firebase/Auth.js';

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
let auth = new Auth(app);

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const options = {
    data() {
        return {
            mode: 'login',
            login: {
                email: '',
                pwd: '',
            },
            register: {
                email: '',
                pwd: '',
            }
        }
    },
    methods: {
        toLogin() {
            this.mode = 'login'
        },
        toRegister() {
            this.mode = 'register'
        },
        async doRegister() {
            if (!this.register.email || !this.register.pwd) {
                Swal.fire({
                    title: '註冊錯誤',
                    html: '未填寫帳號密碼',
                    icon: 'error'
                })
                return
            }

            if (!validateEmail(this.register.email)) {
                Swal.fire({
                    title: '帳號錯誤',
                    html: '不合法的Email格式',
                    icon: 'error'
                })
                return
            }

            let response = await auth.register(this.register.email, this.register.pwd);
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
        async doLogin() {
            if (!this.login.email || !this.login.pwd) {
                Swal.fire({
                    title: '登入錯誤',
                    html: '未填寫帳號密碼',
                    icon: 'error'
                })
                return
            }

            if (!validateEmail(this.login.email)) {
                Swal.fire({
                    title: '帳號錯誤',
                    html: '不合法的Email格式',
                    icon: 'error'
                })
                return
            }

            let response = await auth.signIn(this.login.email, this.login.pwd);
            if (response) {
                await Swal.fire({
                    title: '登入成功',
                    html: '',
                    icon: 'success'
                })
                location.href = 'chat.html'
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
            location.href = 'chat.html'
        })
    }
}

Vue.createApp(options).mount('#member-app');
