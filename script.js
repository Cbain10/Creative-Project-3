let app = new Vue ({
    el: '#app',
    data: {
        current: {
            quote: '',
            author: '',
            season: '',
            episode: '',
            image: ''
        }
    },
    methods: {
        async seinfeld() {
            try {
                const response = await axios.get('https://seinfeld-quotes.herokuapp.com/random');
                this.current = response.data;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

    }

});