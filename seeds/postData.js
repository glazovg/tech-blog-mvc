const { Post } = require('../models');

const postdata =
    [
        {
            "post_title": "How to sleep all the time",
            "post_content": "You just need to have a sleep-inducing alpha rhythm generator device and use it.",
            "user_id": 1
        },
        {
            "post_title": "The Flux capacitor",
            "post_content": "This is what makes time travel possible ",
            "user_id": 2
        },
        {
            "post_title": "What the hell is a jigowatt?",
            "post_content": "The only power source capable triggering that kind of energy is a bolt of lightning.",
            "user_id": 3
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;