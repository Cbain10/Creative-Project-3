Vue.component('star-rating', VueStarRating.default);

let app = new Vue ({
    el: '#app',
    data: {
        current: {
            quote: '',
            author: '',
            season: '',
            episode: ''
        },
        ratings: {
            total: 0,
            sum: 0,
            average: 0
        },
        loading: true
    },
    methods: {
        async seinfeld() {
            try {
                this.loading = true;
                const response = await axios.get('https://seinfeld-quotes.herokuapp.com/random');
                this.current = response.data;
                this.loading = false;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        },
        setRating(rating) {
            this.ratings[this.current].total += 1;
            this.ratings[this.current].sum += rating;
            this.ratings[this.current].average = this.ratings[this.current].sum / this.ratings[this.current].total;
        }
    },
});