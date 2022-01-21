const App = Vue.createApp({
    data() {
        // get data from the server
        return {
            titleText: 'This is my first Vue App!',
            name: 'MetaMxn',
            image: "https://thispersondoesnotexist.com/image",
            // select random color from the array [pink, blue]
            color: ['pink', 'blue'][Math.floor(Math.random() * 2)],
        }
    },
});

// mount the app to the div in index.html with the id 'app'
// elements are created there according to the app requirements
App.mount('#app');