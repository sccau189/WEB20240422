import { App } from './Firebase/App.js';
import { Database } from './Firebase/Database.js';

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

// database.write('test', 123456);

database.listen('test', (data, snapshot) => {
    console.log('from listen callback.');
    console.log(data);
})