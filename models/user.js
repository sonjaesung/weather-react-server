module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        seq: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pw: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        gender: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return User;
};