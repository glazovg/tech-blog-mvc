const { User } = require('../models');

const userdata =
    [
        {
            "username": "Jennifer",
            "password": "greatscott"
        },
        {
            "username": "Emmet",
            "password": "greatscott"
        },
        {
            "username": "Marty",
            "password": "greatscott"
        }
    ];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
