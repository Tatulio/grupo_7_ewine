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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tipoVino:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bodega: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    product.associate = function(models){
    product.belongsTo(models.tipo_vino,{
      foreignKey: 'tipoVino',
      as: 'tipoVino1',
    }),
    product.belongsTo(models.bodega,{
      foreignKey: 'bodega',
      as: 'tipoBodega',
    }),
    product.belongsTo(models.varietal,{
      foreignKey: 'varietal',
      as: 'tipoVarietal',
    })
    }
return product;
};
