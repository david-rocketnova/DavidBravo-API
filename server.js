const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Permite leer JSON en el body (nos hará falta en tareas futuras)
app.use(express.json());

// ---- Datos de ejemplo (en memoria, sin base de datos todavía) ----
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" }
];

// ---- Endpoint raíz ----
app.get("/", (req, res) => {
  res.type("text/plain").send("HOLA SOY DAVID BRAVO");
});

// ---- Endpoint de salud ----
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "davidbravo-API" });
});

// ---- TAREA 2: GET /usuarios -> devuelve la lista completa en JSON ----
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// ---- TAREA 3: GET /usuarios/:id -> un usuario o 404 ----
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
      id: id
    });
  }

  res.json(usuario);
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});