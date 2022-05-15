var fetch = require('node-fetch');
const app = require('./server')

const UrlUsuario = 'http://localhost:9001/user'
const UrlVeiculo = 'http://localhost:9002/vehicle'
const UrlBuscador = 'http://localhost:9003/crawler'


app.get('/', (req, res) => {
    res.send('Hello Yullo, the server is ok');
})


const getUsers = async () => {
    try {
        const response = await fetch(UrlUsuario);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os usuarios')
    }
}

const getVehicles = async () => {
    try {
        const response = await fetch(UrlVeiculo);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os veiculos')
    }
}

const getCrawlers = async () => {
    try {
        const response = await fetch(UrlBuscador);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os buscadores')
    }
}

(async () => {
    while (true) {
        console.log('Carregando usuários...')
        await getUsers()
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('Carregando veículos...')
        await getVehicles()
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('Carregando buscadores...')
        await getCrawlers()
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
})()
