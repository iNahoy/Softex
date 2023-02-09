const express = require('express');
const app = express();
const port = 3000;

let alunos = [
  { id: 1, nome: 'João', idade: 20 },
  { id: 2, nome: 'Maria', idade: 21 },
  { id: 3, nome: 'Pedro', idade: 22 },
];

// Rota para obter todos os alunos
app.get('/alunos', (req, res) => {
  res.status(200).json(alunos);
});

// Rota para criar um novo aluno
app.post('/alunos', (req, res) => {
  const novoAluno = req.body;
  novoAluno.id = alunos.length + 1;
  alunos.push(novoAluno);
  res.status(201).json({ mensagem: 'Aluno criado com sucesso' });
});

// Rota para atualizar um aluno
app.put('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alunoIndex = alunos.findIndex((a) => a.id === id);

  if (alunoIndex === -1) {
    res.status(404).json({ mensagem: 'Aluno não encontrado' });
    return;
  }

  alunos[alunoIndex] = req.body;
  alunos[alunoIndex].id = id;

  res.status(200).json({ mensagem: 'Aluno atualizado com sucesso' });
});

// Rota para remover um aluno
app.delete('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alunoIndex = alunos.findIndex((a) => a.id === id);

  if (alunoIndex === -1) {
    res.status(404).json({ mensagem: 'Aluno não encontrado' });
    return;
  }
  alunos.splice(alunoIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
