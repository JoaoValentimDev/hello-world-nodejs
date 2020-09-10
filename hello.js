// módulo http do node.js
const http = require('http');
        
// criando meu servidor
const meuServidor = http.createServer(function (requisicao, resposta) {
	resposta.setHeader('Content-type', 'text/plain');
	resposta.end('Hello World');
});
        
// Dando uma porta para o meu servidor
meuServidor.listen(3000, function() {
	console.log('Servidor rodando na porta 3000...');
});