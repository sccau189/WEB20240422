import { Storage } from "./Storage.js";
import { API } from "./API.js";

const options = {
    data() {
        return {
            newItem: '',
            database: [],
            uid: '',
        }
    },
    methods: {
        add() {
            console.log('add');
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
            this.database = Storage.getData(this.uid);
        },
        save() {
            Storage.setData(this.uid, this.database);
        },
        setChecked(item) {
            // Call by reference.
            console.log('reference!!!')
            item.checked = !item.checked;
            this.save();
        },
        setCheckedIndex(index) {
            console.log('index!!!!');
            this.database[index].checked = !this.database[index].checked;
            this.save();
        }
    },
    mounted() {
        console.log('is mounted.');
        this.uid = Storage.getUid();
        if (!this.uid) {
            this.initUid();
        } else {
            this.load();
        }
    }
};

Vue.createApp(options).mount('#todo-app');