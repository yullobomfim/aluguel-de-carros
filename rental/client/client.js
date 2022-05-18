import fetch from 'node-fetch';

const urlUser  = 'http://localhost:9001/'
const urlVehicle  = 'http://localhost:9002/'
const urlCrawler  = 'http://localhost:9003/'

const getUsers = async () => {
    try {
        const response = await fetch(urlUser);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os usuarios')
    }
}

const getVehicles = async () => {
    try {
        const response = await fetch(urlVehicle);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os veiculos')
    }
}

const getCrawlers = async () => {
    try {
        const response = await fetch(urlCrawler);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('Não foi possível carregar os veiculos disponiveis')
    }
}


(async () => {
    while (true) {
        console.log('Listando os clientes cadastrados...')
        await getUsers()
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log('Carregando veículos da loja...')
        await getVehicles()
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log('Carregando os Veiculos disponiveis para aluguel ...')
        await getCrawlers()
        await new Promise(resolve => setTimeout(resolve, 4000));

    }
})()
