import { App } from './Firebase/App.js';
import { Database } from './Firebase/Database.js';
import { Auth } from './Firebase/Auth.js';
import { Chat } from './chat/Chat.js'

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

auth.onChange((user) => {
    new Chat(user, database, auth);
}, () => {
    location.href = 'member.html';
});