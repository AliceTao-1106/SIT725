const mongoose = require('mongoose');
const Project = require('./models/Project');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const books = [
    {
        title: "Goodnight Moon",
        image: "images/book2.jpg",
        link: "Read more",
        description: "A gentle bedtime story of a little bunny saying goodnight to everything around him."
    },
    {
        title: "Charlotte's Web",
        image: "images/book3.jpg",
        link: "Read more",
        description: "The touching story of a pig named Wilbur and his friendship with a spider named Charlotte."
    },
    {
        title: "Dear Zoo",
        image: "images/book4.jpg",
        link: "Read more",
        description: "This interactive page-turning book tells the story of a child who writes to the zoo asking for a pet."
    },
    {
        title: "The Tale of Despereaux",
        image: "images/book5.jpg",
        link: "Read more",
        description: "The book tells the adventures of Despereaux Tilling, a tiny mouse with unusually large ears."
    },
    {
        title: "Frog and Toad Are Friends",
        image: "images/book6.jpg",
        link: "Read more",
        description: "This is a series of stories about the friendship between a Frog and a Toad."
    }
];

    Project.insertMany(books)
    .then(() => console.log("All books inserted!"))
    .catch(() => console.log("Something went wrong while inserting books."));
