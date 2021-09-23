const express = require('express'); //sitaxis de importaciòn node
require('dotenv').config();
const{ dbConection } = require('./config/database');
const cors = require('cors'); //forma de importar

//Crear el servidor express
const app = express();

//configurar cors

app.use(cors()); //aceptar cualquier peticiòn de cualquier servidor
//Estableciendo conexión a la BD
dbConection();

//Verificando variables de entorno
console.log(process.env);

//Rutas de la API Proyectos 
app.get('/',(req, res)=>{
    res.status(400).json({
    ok:true,
    msg: 'Bienvenidos a node'
    });
 }); 

//Còdigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor Nodejs desplegado en el puerto: '+ process.env.PORT )
})