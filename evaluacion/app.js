const express = require('express');
const path = require('path'); // Importar el módulo path
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const books = require('./routes/books');
const authors = require('./routes/authors');
app.use('/books', books);
app.use('/authors', authors);

// Manejo de rutas incorrectas
app.use('/*', (req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
