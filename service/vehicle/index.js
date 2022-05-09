import express from 'express';
const app = express();


app.get('/hello',  function (req, res) {
    res.send('hello')
});

app.get('/vehicle', async function (req, res) {
    res.json(vehicle)
})

app.listen(9000, () => console.log('Server started on port 9002'));