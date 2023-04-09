require('dotenv').config();
const { Sequelize} = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const recipe = require('./models/Recipes');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);
recipe(sequelize);


module.exports = {
   ...sequelize.models,
   sequelize,
};
