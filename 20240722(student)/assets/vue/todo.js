const options = {
    data() {
        return {
            user: 'David'
        }
    },
    methods: {

    },
    mounted() {
        console.log('is mounted.');
    }
};

Vue.createApp(options).mount('#todo-app');