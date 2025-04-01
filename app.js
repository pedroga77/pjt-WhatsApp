/****************************************************************
 * objetivo: API para retornar dados do zapzap
 * data: 04/02/2024
 * autor: pedro souza
 * versao: 1.0
 ****************************************************************/
const express       = require('express')
const cors          = require('cors')
const projetoWhatt = require('./funcao')

const app = express ()


app.use(cors())

app.get('/v1/whatsapp/contatos/:number', cors(), async function (request, response){

    let number = request.params.number

   let dados = projetoWhatt.getDadosUsuarios(number)
    
   response.status(200)
    response.json(dados)
})


app.get('/v1/whatsapp/contatos2/:number', cors(), async function (request, response){

    let number = request.params.number

    let dados = projetoWhatt.getDadosConta(number)
    
     response.status(200)
    response.json(dados)
})


app.get('/v1/whatsapp/contatos3/:number', cors(), async function (request, response){

    let number = request.params.number

   let dados = projetoWhatt.getDadosContato(number)
    
   response.status(200)
    response.json(dados)
})


app.get('/v1/whatsapp/contatos4/:number', cors(), async function (request, response){

    let number = request.params.number

   let dados = projetoWhatt.getConvContato(number)
    
   response.status(200)
    response.json(dados)
})


app.get('/v1/whatsapp/contatos5/:number', cors(), async function (request, response){

    let aruan = request.params.number
    let crespo = request.query.name

   let dados = projetoWhatt.getNomeContato(aruan, crespo)
    
   response.status(200)
    response.json(dados)    
})


app.get('/v1/whatsapp/contatos6/:number', cors(), async function (request, response){

    let aruan = request.params.number
    let ravanha = request.query.content
    let crespo = request.query.name

   let dados = projetoWhatt.getPalavraChave(aruan, crespo, ravanha)
    
   response.status(200)
    response.json(dados)    
})



app.listen(8888, function(){
    console.log('API funcionando e aguardando requisições...')
})


//http://localhost:8888/v1/whatsapp/contatos/11955577796
//http://localhost:8888/v1/whatsapp/contatos2/11955577796
//http://localhost:8888/v1/whatsapp/contatos3/11955577796
//http://localhost:8888/v1/whatsapp/contatos4/11955577796
//http://localhost:8888/v1/whatsapp/contatos5/11987876567?name=Ana%20Maria
//http://localhost:8888/v1/whatsapp/contatos6/11987876567?name=Ana%20Maria&content=Leonid
