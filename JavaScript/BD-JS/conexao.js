const Sequelize = require('sequelize');
const sequelize = new Sequelize( "admin", "root", "root", {  ///Root root seria no caso, usuário e senha do bd
    host: "localhost",
    dialect: "mysql"
});
sequelize.authenticate()
.then(function(){
    console.log('Conexão bem sucedida.');})
    .catch(function(){
    console.log('Conexão mal sucedida.');})
module.exports = sequelize;