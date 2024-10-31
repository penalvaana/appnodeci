const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET para obtener autores
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Lista de autores',
        data: [] // Aquí podrías incluir tus autores
    });
});

module.exports = router;
