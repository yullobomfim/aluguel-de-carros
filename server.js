var express = require('express');
const server = express();

const PORT = 9000;


server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

module.exports = server
