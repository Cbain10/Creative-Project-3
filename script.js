Vue.component('star-rating', VueStarRating.default);

let app = new Vue ({
    el: '#app',
    data: {
        number: 1,
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
        addedName: '',
        addedComment: '',
        comments: {
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
        // setRating(rating) {
        //     this.ratings[this.current].total += 1;
        //     this.ratings[this.current].sum += rating;
        //     this.ratings[this.current].average = this.ratings[this.current].sum / this.ratings[this.current].total;
        // },
        addComment() {
            if (!(this.number in this.comments))
                Vue.set(app.comments, this.number, new Array);
            this.comments.push({
                author: this.addedName,
                text: this.addedComment,
                time: moment().format('LLLL'),
            });
            this.addedName = '';
            this.addedComment = '';
            // this.comments.name = this.addedName;
            // this.comments.words = this.addedComment;
            // this.comments.time = moment().format('LLLL');
        }
    },
});