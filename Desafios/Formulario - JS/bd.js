const Sequelize = require('sequelize');
const sequelize = newSequelize('form','root','root',{
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(function(){
    console.log('conectado');
}).catch(function(erro){
    console.log('não conectado'+erro);
});