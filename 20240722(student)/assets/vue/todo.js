const options = {
    data() {
        return {
            newItem: '',
            database: [],
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
        }
    },
    mounted() {
        console.log('is mounted.');
        this.database.push({
            id: 1,
            name: 'Test1',
            checked: false
        })

        this.database.push({
            id: 2,
            name: 'Test2',
            checked: true
        })

        this.database.push({
            id: 3,
            name: 'Test3',
            checked: true
        })
    }
};

Vue.createApp(options).mount('#todo-app');