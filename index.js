const express = require('express');
const routerApi = require('./routes');

const app = express();
const port= 3000;

app.use(express.json());



//settings
app.get('/', function(req, res) {
    res.send("Probando Puerto")
})
 
//pasar la app
routerApi(app);

       
//iniciando server
app.listen(port,()=>{
    console.log('Servidor en puerto 3000');
});
