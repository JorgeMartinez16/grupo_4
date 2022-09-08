const express = require('express');
const app = express()
const mysql = require('mysql');


var conexion = mysql.createConnection({
    host: "localhost",
    database: 'usuarios_db',
    user: 'root',
    pass: ''

})


//settings
app.get('/', function(req, res) {
    res.send("Probando Puerto")
   })
//  
app.get('/pacientes', (req, res)=>{
    res.send("pacientes")
});

app.get('/medicos', (req, res)=>{
    res.send("medico")
});

app.get('/personas',(req, res)=>{
    res.json([{
        nombre: 'jorge',
        sexo: 'masculino',
        ciclo: '3'},
     { nombre: 'mario',
    sexo: 'masculino',
    ciclo: '3'


    }])
})
       
app.get('categorias/:id/personas')

//iniciando server
app.listen(3000,()=>{
    console.log('Server on port 3000');
});

