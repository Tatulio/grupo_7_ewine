// user model sequelize

module.exports = function (sequelize,DataTypes){
  let user = sequelize.define('file',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey :true
        },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,     
    },
    },{
    tableName: "files",
    timestamps: false,
    });
    user.associated = function(models){
    user.hasMany(models.Image,{
      foreignKey: 'image',
      as: 'image',
    });
    }
return user;
};
