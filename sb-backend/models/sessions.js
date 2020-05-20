// Creating our Sessions model
module.exports = function (sequelize, DataTypes) {
    var Session = sequelize.define("Session", {
        // The email cannot be null, and must be a proper email before creation
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })


    Session.associate = function (models) {
        models.Session.belongsTo(models.User, { as: "host" })
        models.Session.hasMany(models.UserSession, { onDelete: 'cascade' })
        models.Session.belongsTo(models.Class, { as : "studygroup"});
        models.Session.belongsTo(models.Location, { as : "studysesion" });
    }
    return Session;
}