const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estaticos del sitio
app.use(express.static(path.join(__dirname, "public")));

// Galeria de fotos de la asociacion
app.use("/fotos", express.static(path.join(__dirname, "fotos")));

// Landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`AMUPCCUF landing corriendo en http://localhost:${PORT}`);
});
