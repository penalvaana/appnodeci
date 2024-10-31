const express = require('express');
const path = require('path'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const books = require('./routes/books');
const authors = require('./routes/authors');
app.use('/books', books);
app.use('/authors', authors);

// Ruta de inicio
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hola mundo'
    });
});

// Ruta comodín
app.use('/*', (req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
