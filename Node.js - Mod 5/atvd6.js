const express = require('express');
const app = express();

app.get('status_code', (req, res) => {
    const status_code = req.params.status_code;
    if (status_code == 404) {res.sendStatus(404);} 
    else if (status_code == 200) { res.status(200).send('Funcionando!');} 
    else { res.status(400).json({ message: 'Inválido!' });}
});

app.listen(8080, () => {console.log('Porta 8080 funcionando!');});