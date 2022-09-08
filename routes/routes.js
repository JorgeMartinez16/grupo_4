module.exports = (app, opts) =>{
app.get('/pacientes', (req, res)=>{
     res.send("pacientes")
 });

app.get('/acompañantes',(req, res)=>{
    res.send("acompañantes")
})
}