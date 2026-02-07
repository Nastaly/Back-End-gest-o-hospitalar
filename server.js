// 1️⃣ Importar modulos
const express = require("express");
const mysql = require("mysql2");

// 2️⃣ Criar app exprdsd
const app = express();
const PORT = 3003;

// 3️⃣ Middleware to parse JSON (important for POST requests)
app.use(express.json());

// 4️⃣ MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // replace with your MySQL user
    password: "",       // replace with your MySQL password
    database: "Projetodb"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

// 5️⃣ Routes

// Default route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// GET all pacientes
app.get("/pacientes", (req, res) => {
    db.query("SELECT * FROM paciente", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// POST a new paciente
app.post("/pacientes", (req, res) => {
    const { nome, data_nascimento, sexo, telefone, endereco } = req.body;

    const query = `
        INSERT INTO paciente 
        (nome, data_nascimento, sexo, telefone, endereco) 
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [nome, data_nascimento, sexo, telefone, endereco];

    db.query(query, values, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Paciente criado com sucesso!", id: result.insertId });
    });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
