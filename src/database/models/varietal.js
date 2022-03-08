// user model sequelize
var DataTypes = require('sequelize/lib/data-types');

module.exports = function (sequelize,DataTypes){
  let varietal = sequelize.define('varietal',{
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey :true
        },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },{
    tableName: "Varietales",
    timestamps: false,
    });
    
    varietal.associate = function(models){
    varietal.hasMany(models.product,{ 
      foreignKey: 'varietal', 
      as: 'vinos'});
    }
return varietal;
};
