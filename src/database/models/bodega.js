// user model sequelize
var DataTypes = require('sequelize/lib/data-types');

module.exports = function (sequelize,DataTypes){
  let bodega = sequelize.define('bodega',{
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
    tableName: "Bodegas",
    timestamps: false,
    });
    
    bodega.associate = function(models){
    bodega.hasMany(models.product,{ 
      foreignKey: 'bodega', 
      as: 'vinos'});
    }
return bodega;
};
