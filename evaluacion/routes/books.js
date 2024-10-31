const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET para obtener libros
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Lista de libros',
        data: [] // Aquí podrías incluir tus libros
    });
});

module.exports = router;
