require('dotenv').config();

const Server = require('./models/server');

// instancia del Servidor
const server = new Server();

// Ahora lanzamos el metodo listen para levantar el servidor
server.listen();

