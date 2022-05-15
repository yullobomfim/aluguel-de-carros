import express, { json } from 'express'
const app = express();
import '../../data/user.json'

app.use(express.json())

app.get('/hello',  (req, res) => {
    res.send('hello crawler')
});

app.get('/crawler', async (req, res) => {

})

app.listen(9003, () => console.log('Server started on port 9003'));