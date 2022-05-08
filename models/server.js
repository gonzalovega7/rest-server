const express = require('express');

class Server {

    // Declaramos las propiedades en el constructor
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares: son funciones que siempre van a ejecutarse cuando levantemos el servidor
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        // Directorio publico
        this.app.use( express.static('public') );

    }

    // Metodo routes para definir las rutas que yo quiero
    routes() {
        
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        })
    }

    // Metodo listen para definir el puerto en el cual esta escuchando
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ' + this.port);
        });
    }

}

module.exports = Server;