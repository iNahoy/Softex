const express = require("express");
const app = express();
const mysql = require("mysql");
const con = mysql.conexao({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crudappjs"
});

con.connect(err => {
  if (err) throw err;
  console.log("Conectado ao banco de dados");
});

app.post("/recurso", (req, res) => {
  let sql = "INSERT INTO dados SET ?";
  let post = { nomecoluna: req.body.nomedoparametro };
  con.query(sql, post, (err, result) => {
    if (err) throw err;
    res.status(201).send("Recurso criado com sucesso");
  });
});

app.get("/recurso/:id", (req, res) => {
  let sql = `SELECT * FROM dados WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

app.put("/recurso/:id", (req, res) => {
  let sql = `UPDATE dados SET nomecoluna = '${req.body.nomedoparametro}' WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send("Recurso atualizado com sucesso");
  });
});

app.delete("/recurso/:id", (req, res) => {
  let sql = `DELETE FROM dados WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send("Recurso deletado com sucesso");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});