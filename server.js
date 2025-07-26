const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀JOSE DAVID, ahora soy informatico profesional, SALAMI SALAMI!!!!!!!! Hola desde mi backend de prueba con Node.js + Express");
});

app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "JOSE DAVID, ahora soy informatico profesional, SALAMI SALAMI!!!!!!!! Hola, este es un endpoint API de prueba" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en puerto ${PORT}`);
});
