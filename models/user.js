module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        seq: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pw: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return User;
}