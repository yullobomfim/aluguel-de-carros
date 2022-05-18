import express from 'express'
import fs from 'fs';

const app = express();
app.use(express.json())

app.get('/',  (req, res) => {
  var data = fs.readFileSync("./data/vehicle.json", "utf8");
  res.setHeader('Content-Type', 'application/json');
  res.send(data)

});

app.listen(9000, () => console.log('Server started on port 9002'))
