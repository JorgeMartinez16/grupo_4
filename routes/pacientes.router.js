const express = require('express');
const router = express.Router();

//rutas
router.get('/',(req, res)=>{
    res.send("esperando pacientes")
});

router.get('/filter',(req, res)=>{
    res.send('ruta filtro')
});


module.exports = router;


