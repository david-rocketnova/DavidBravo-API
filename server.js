const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("text/plain").send("HOLA SOY DAVID BRAVO");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "davidbravo-API" });
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});
