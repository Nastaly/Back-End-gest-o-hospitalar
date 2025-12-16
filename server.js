import express from 'express';
import mysql from 'mysql2';

const app = express();

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: '4321',
  database: 'Projetodb'
});


conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

app.get('/', (req, res) => {
  conexao.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      res.status(500).send('Erro na consulta');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});