
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define("Cities", {
        ID: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
        },
        CountryCode: {
            type: DataTypes.STRING
        },
        District: {
            type: DataTypes.STRING
        },
        Population: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "city",
        timestamps: false
    });

    return City;
};