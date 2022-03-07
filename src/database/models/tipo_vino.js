// user model sequelize
var DataTypes = require('sequelize/lib/data-types');

module.exports = function (sequelize,DataTypes){
  let tipo_vino = sequelize.define('tipo_vino',{
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
    tableName: "tipo_vino",
    timestamps: false,
    });
    
    tipo_vino.associate = function(models){
    tipo_vino.hasMany(models.product,{ 
      foreignKey: 'tipoVino', 
      as: 'vinos'});
    }
return tipo_vino;
};
