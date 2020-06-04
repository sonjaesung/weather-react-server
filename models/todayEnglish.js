module.exports = (sequelize, DataTypes) => {
    const TodayEngilish = sequelize.define('todayEnglish', {
        seq: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userSeq: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        check: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        delete: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
    });

    return TodayEngilish;
};