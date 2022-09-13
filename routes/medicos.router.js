const express = require('express');
const router = express.Router(); //creando acceso a la aplicacion

//rutas
router.get('/',(req, res)=>{
    res.send("esperando medicos")
});



module.exports = router;
