const options = {
    data() {
        return {
            newItem: '',
            database: [],
        }
    },
    methods: {

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

        console.log(this.database);
    }
};

Vue.createApp(options).mount('#todo-app');