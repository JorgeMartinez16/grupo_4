const express = require('express');
const router = express.Router();

//rutas

router.get('/',(req, res)=>{
    res.json([{
        nombre: 'jorge',
        sexo: 'masculino',
        ciclo: '3'},
     { nombre: 'mario',
    sexo: 'masculino',
    ciclo: '3'

    }])
   
})
module.exports = router;
