import express from 'express'
import {config} from 'dotenv'
import path from 'path'
import {readFileSync} from 'fs'
import { randomUUID } from 'crypto'
import cors from 'cors'

//import dbJson from './server.json' -> outra forma de importar ddados json

type User {
    id: string
    name: string
    age: number
}

config()
const app = express()
app.use(express.json())
app.use('/client', express.static(path.join(__dirname, 'public')))
app.use(cors)
const port = process.env.API_PORT ?? 3300
const url = process.env.API_BASE_URL ?? 'http://localhost'
//const dbJsonPath = path.resolve(process.cwd(), 'server.json')
//const dbJson = readFileSync(dbJsonPath)
//const users: User[] = JSON.parse(dbJson.toString()).users  -> guardar dados gerados em um arquivo json

//const users: User[] = dbJson
//console.log(users) -> outra forma de exportar dados json

const users: User[] = [
    {
        id: randomUUID(),
        name: 'ben',
        age: 19
    },
    {
        id: = randomUUID(),
        name: 'rey',
        age: 27
    }
]

// interface CreateUser {
//     name: string
//     age: string
// }
type CreateUser = Omit<User, "id">


app.get('/api/users', (request, response) => {
    //const homePagePath = path.join(__dirname, 'home.html')
    //const homePage = readFileSync(homePagePath)
    return response.status(200).send('<h1 style="color: red;">Api Base URL</h1>')
    //return response.status(200).send()
})

app.get('/api/users', (request, response) => {
    return response.json(users)
})

app.post('/api/users', (request, response) => {
    const {name, age}: CreateUser = request

    if ((!name || age < 0)){
        const errMessage = 'O usuário precisa de nome e idade'
        return response.status(400).send(errMessage)
    }

    const user = {id: randomUUID(), name, age}

    users.push(user)

    //writeFileSync(dbUserPath, JSON.stringify({...dbJson, users})

    return response.status(201).json(user)
})

app.put('/api/users', (request, response) => {
    return response.json(users)
})

app.delete('/api/users/:id', (request, response) => {
    const {id} = request.params

    if(!id) {
        const errMessage = 'O usuário a ser deletado precisa de um id'
        return response.status(400).send(errMessage)
    }

const foundUser = users.find(user => user.id === id)

if (!foundUser) {
    const errMessage = `O usuário com o id ${id} não foi encontrado`
    return response.status(400).send(errMessage)
}

const updatedUsers = users.filter(user => user.id !== id)

//writeFileSync(dbUserPath, JSON.stringify({...dbJson, updatedUsers})

return response.status(204).json()

})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})
