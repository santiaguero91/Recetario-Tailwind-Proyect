const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('recipe', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 10,
        }
    },
    season: {
        type: DataTypes.ARRAY(DataTypes.ENUM('Summer','Autumn','Winter','Spring')),
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
        timestamps: false,
        freezeTableName: true,
    });
};