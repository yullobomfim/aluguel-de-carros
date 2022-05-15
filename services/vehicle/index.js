import express from 'express'
const app = express();

app.use(express.json())

app.get('/hello',  (req, res) => {
    res.send('hello vehicle')
});

app.get('/vehicle', async (req, res) => {
    res.json(vehicle)
})

app.listen(9002, () => console.log('Server started on port 9002'));