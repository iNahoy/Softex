const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/livro/:id', (req, res) => {
    const livro = {
        id: req.params.id,
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien'
    };
    res.json(livro);
});

app.listen(port, () => {
    console.log(`Web service rodando na porta ${port}`);
});
