//  Questão 01

// const http = require('http')
// const os = require('os')
// const port = 65535
// const objeto = [
//     {resposta: os.type()},
//     {resposta: os.freemem()},
//     {resposta: os.homedir()},
// ]
// const jsonObjeto = JSON.stringify(objeto)

// const server = http.createServer((req, res) => {
//     if(req.url === '/info'){
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.write(jsonObjeto)
//         console.log(jsonObjeto)
//         return res.end()
//     }

// }).listen(port, () => {
//     console.log(`http://localhost:${port}`)
// })

// Questão 02
// const path = require('path')
// const url = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

// const resposta = {
//     dir: path.dirname(url),
//     ext: path.extname(url),
//     abs: path.resolve(url)
// }
// console.log(resposta)

// Questão 03

// const url = require('url')

// const address = new url.URL('https://nodejs.org/api/url.html#url_new_url_input_base')

// console.log(address.href)
// console.log(address.protocol)
// console.log(address.host)
// console.log(address.hostname)
// console.log(address.pathname)
// console.log(address.hash)

// Questão 04

// const fs = require('fs')

// fs.rename('arquivo-velho.txt', 'arquivo-novo.txt', (err) => {
//     if(err) throw err

//     console.log('Renomeado')
// })

// Questão 05

// const os = require('os')

// console.log(os.cpus())