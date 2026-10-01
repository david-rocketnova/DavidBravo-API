const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Permite leer JSON en el body (nos hará falta en tareas futuras)
app.use(express.json());

// Sirve los archivos estáticos de la carpeta "public" (index.html, css, etc.)
app.use(express.static("public"));

// ---- Datos de ejemplo: usuarios ----
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" }
];

// ---- Datos de ejemplo: productos ----
const productos = [
  { id: 1, nombre: "Pizza", precio: 30000 },
  { id: 2, nombre: "Hamburguesa", precio: 25000 },
  { id: 3, nombre: "Coca-Cola", precio: 10000 }
];

// ---- Endpoint de salud ----
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "davidbravo-API" });
});

// ---- TAREA 2: GET /usuarios -> lista completa ----
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

// ---- TAREA 6: GET /productos -> lista de productos ----
app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});