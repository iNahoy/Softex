const express = require ('express');
const app = express();

app.get("/",async (req,res,) => {res.send("Teste de rotas")});
app.listen(2100, () => { console.log("Servidor funcionando")});