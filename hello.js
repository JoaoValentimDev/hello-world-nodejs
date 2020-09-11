// ====================================
// =     HELLO WORLD EM NODE.JS       =  
// ====================================

const http = require('http');
	 

const meuServidor = http.createServer(function (requisicao, resposta) {
  resposta.setHeader('Content-type', 'text/plain');
  resposta.end('Hello World');
});


meuServidor.listen(3000, function() {
  console.log('Servidor rodando na porta 3000...');
});