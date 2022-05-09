// import fetch from 'node-fetch'

const userUrl = 'http://localhost:9001/user'
const vehiclesUrl = 'http://localhost:9002/vehicle'
const crawlerUrl = 'http://localhost:9003/crawler'

const getUsers = async () => {
    try {
        const response = await fetch(userUrl);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('cannot load users')
    }
}

const getVehicles = async () => {
    try {
        const response = await fetch(vehiclesUrl);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('cannot load vehicles')
    }
}

const getCrawlers = async () => {
    try {
        const response = await fetch(crawlerUrl);
        response.json().then(data => console.log(data))
    } catch (error) {
        return console.log('cannot load the crawlers')
    }
}

(async () => {
    while (true) {
        console.log('Loading users...')
        await getUsers()
        await new Promise(resolve => setTimeout(resolve, 8000));
        console.log('Loading vehicles...')
        await getVehicles()
        await new Promise(resolve => setTimeout(resolve, 8000));
        console.log('Loading crawlers...')
        await getCrawlers()
        await new Promise(resolve => setTimeout(resolve, 8000));
    }
})()