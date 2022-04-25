const { User } = require('../models');

const userdata =
    [
        {
            "username": "jenniferParker",
            "password": "greatscott"
        },
        {
            "username": "emmetBrown",
            "password": "greatscott"
        },
        {
            "username": "martyMcFly",
            "password": "greatscott"
        }
    ];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
