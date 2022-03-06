// user model sequelize

module.exports = function (sequelize,DataTypes){
  let user = sequelize.define('user',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey :true
        },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
    },
    isActive:{
      type: DataTypes.BOOLEAN,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { 
      type: DataTypes.INTEGER,      
    },
    },{
    tableName: "users",
    timestamps: false,
    });
    // user.associated = function(models){
    // user.hasMany(models.Image,{
    //   foreignKey: 'image',
    //   as: 'image',
    // });
    //}
return user;
};
