const { Post } = require('../models');

const postdata =
    [
        {
            "postTitle": "How to slepp all the time",
            "postContent": "You just need to have a sleep-inducing alpha rhythm generator device and use it.",
            "userId": 1
        },
        {
            "postTitle": "The Flux capacitor",
            "postContent": "This is what makes time travel possible ",
            "userId": 2
        },
        {
            "postTitle": "What the hell is a jigowatt?",
            "postContent": "The only power source capable triggering that kind of energy is a bolt of lightning.",
            "userId": 3
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;