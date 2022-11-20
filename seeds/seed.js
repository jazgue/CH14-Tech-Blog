const userSeeds = require('./userData.js');
const postSeeds = require('./postData');
const commentSeeds = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced');
    await userSeeds();
    console.log('Users seeded');
    await postSeeds();
    console.log('Posts seeded');
    await commentSeeds();
    console.log('Comments seeded');

    process.exit(0)
};

seedAll();
