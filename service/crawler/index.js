import express from 'express';
const app = express();


app.get('/hello',  function (req, res) {
    res.send('hello')
});

app.get('/crawler', async function (req, res) {
    res.json(crawler)
})

app.listen(9000, () => console.log('Server started on port 9003'));