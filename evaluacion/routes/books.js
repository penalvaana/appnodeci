const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('<h1>Lista de Libros</h1>'); // Devuelve HTML
});

module.exports = router;
