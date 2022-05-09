const express = require('express');
const app = express();

const PORT = 9000;

app.get('/', (req, res) => {
    res.send('Hello Server');
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
