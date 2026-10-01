const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("text/plain").send("HOLA SOY DAVID BRAVO");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "davidbravo-API" });
});

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});
