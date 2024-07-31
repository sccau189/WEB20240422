import { App } from './Firebase/App.js';
import { Auth } from './Firebase/Auth.js';
import { Register } from './member/Register.js';
import { SignIn } from './member/SignIn.js';

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

const options = {
    data() {
        return {
            mode: 'login'
        }
    },
    methods: {
        toLogin() {
            this.mode = 'login'
        },
        toRegister() {
            this.mode = 'register'
        }
    }
}

Vue.createApp(options).mount('#member-app');





// new SignIn(auth);
// new Register(auth);

// let registerWrap = document.querySelector('#register-wrap');
// let loginWrap = document.querySelector('#login-wrap');
// let toLoginBtn = document.querySelector('#to-login-btn');
// let toRegisterBtn = document.querySelector('#to-register-btn');


// toLoginBtn.addEventListener('click', () => {
//     loginWrap.classList.add('on');
//     registerWrap.classList.remove('on');
// })

// toRegisterBtn.addEventListener('click', () => {
//     loginWrap.classList.remove('on');
//     registerWrap.classList.add('on');
// })

// auth.onChange((user) => {
//     // TODO: 註冊或登入成功時，需先顯示訊息再轉跳
//     location.href = 'chat.html';
// }, () => {
//     loginWrap.classList.add('on');
// })