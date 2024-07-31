import { Storage } from "./Storage.js";
import { API } from "./API.js";

const options = {
    data() {
        return {
            newItem: '',
            database: [],
            uid: '',
            autoUpload: true
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
            if (this.autoUpload) {
                this.upload(true);
            }
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
        },
        async upload(muted) {
            console.log(muted);
            console.log('upload data...');

            let uid = this.uid;
            let data = Storage.getData(uid);
            if (muted) {
                await API.write(uid, data);
                return;
            }

            Swal.fire({
                title: "數據上傳中",
                html: "請勿關閉或重新整理視窗",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
            });


            let response = await API.write(uid, data);
            setTimeout(() => {
                if (response.code == 200) {
                    Swal.fire({
                        title: '上傳成功',
                        html: '數據已傳送至雲端',
                        icon: 'success'
                    })
                } else {
                    Swal.fire({
                        title: '上傳失敗',
                        html: '數據上傳失敗，請稍後在試',
                        icon: 'error'
                    })
                }

            }, 1000)
        },
        async download() {
            console.log('download data...');

            let uid = this.uid;

            let result = await Swal.fire({
                title: '下載確認?',
                html: '現有數據將被覆蓋',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: '等等',
                confirmButtonText: '確定'
            })

            if (!result.isConfirmed) {
                return;
            }

            let response = await API.read(uid);
            Storage.setData(uid, response.data);
            Swal.fire({
                title: '下載成功',
                html: '數據已從雲端下載',
                icon: 'success'
            })
            this.load();
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