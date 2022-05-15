import express from 'express'
const app = express();
import '../../data/user.json'

app.use(express.json())

app.get('/',  (req, res) => {
    res.send('hello Yullo ')
});

app.get('/user', (req, res)=> {
  res.json(user)

});

app.listen(9001, () => console.log('Server started on port 9001'))
