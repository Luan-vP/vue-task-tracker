const App = Vue.createApp({
    data() {
        // get data from the server
        return {
            name: 'MetaMxn',
            image: "https://thispersondoesnotexist.com/image",
            // select random color from the array [pink, blue]
            color: ['pink', 'blue'][Math.floor(Math.random() * 2)],
        }
    },
    methods: {
        async generateUser() {
            console.log("Generating user...");
            const res = await fetch("https://randomuser.me/api/");
            const { results } = await res.json();
            this.name = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.image = "https://thispersondoesnotexist.com/image" + "?random=" + Math.random();
            this.color = ['pink', 'blue'][Math.floor(Math.random() * 2)];
        }
    },
});

// mount the app to the div in index.html with the id 'app'
// elements are created there according to the app requirements
App.mount('#app');