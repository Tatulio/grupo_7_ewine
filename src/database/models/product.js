// user model sequelize
var DataTypes = require('sequelize/lib/data-types');

module.exports = function (sequelize,DataTypes){
  let product = sequelize.define('product',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey :true
        },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    varietal:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoVino:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    bodega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notasCata: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maridaje: { 
      type: DataTypes.STRING,
      allowNull: false,      
    },
    price: { 
      type: DataTypes.STRING,
      allowNull: false,      
    },
    offert:{
      type: DataTypes.BOOLEAN,
    },
    destacado:{
      type: DataTypes.BOOLEAN,
    },
    recomendaciones:{
      type: DataTypes.BOOLEAN,
    },
    image: { 
      type: DataTypes.INTEGER,      
    },
    },{
    tableName: "products",
    timestamps: false,
    });
    product.associated = function(models){
    product.hasMany(models.Image,{
      foreignKey: 'image',
      as: 'image',
    });
    }
return product;
};
