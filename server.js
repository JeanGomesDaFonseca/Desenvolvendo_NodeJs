const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {'Content-type': "application/json"});

    if(request.url === '/produto'){
        response.end(JSON.stringify({
            message:"Rota do produto ZÉ DA MANGA"
        }))
    }

    if(request.url === '/usuario'){
        response.end(JSON.stringify({
            message: "Zé DA MANGA é meu usuario"
        }))
    }
    
    // response.end(JSON.stringify({
    //     message: 'Aiinn, Aiinnn ZÉ DA MANGA!'
    // }))
  })
  .listen(4001, () => console.log("Servidor está rodando na porta 4001"));
