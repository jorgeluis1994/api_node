// Importa el archivo de rutas
const userRoutes = require('./router/userRoutes');

const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usa las rutas definidas en el archivo de rutas
app.use('/', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
