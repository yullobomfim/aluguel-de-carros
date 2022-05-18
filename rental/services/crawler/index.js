import express from 'express'
const app = express();
import axios from 'axios'

app.use(express.json())

app.get('/', (req, res) =>{
  const URL_SERVICO_1 = 'http://localhost:9001'
  const URL_SERVICO_2 = 'http://localhost:9002'
  
  async function getServices(url) {
      try {
          let res = await axios({
              url: url,
              method: 'get',
              timeout: 5000,
              headers: {
                  'Content-Type': 'application/json',
                  'Content-type': 'Access-Control-Allow-Methods'
              }
          })
          return res.data
      }
      catch (error) {
          console.log(error)
      }
  }

  async function services(url) {
      const a = await getServices(url)
          var array = []  
          a.map((item)=>{
              if (item.VeiculoDisponivel==true){
                  array.push(item)
              }
          })
          console.log(array)
      return array
  } 
})

  const users = services(URL_SERVICO_1)
  const vehicles = services(URL_SERVICO_2)

  console.log(users)
  console.log(vehicles)


app.listen(9000, () => console.log('Server started on port 9003'))
