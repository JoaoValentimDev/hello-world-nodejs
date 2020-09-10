#   Hello World em Node.js

Este projeto tem como finalidade exibir a mensagem "Hello World" em tela para o usuário, usando o **Node.js**, um **runtime** de JavaScript. Foi usado o módulo [http](https://www.luiztools.com.br/post/http-para-programadores-node-js/) do Node.js, responsável pela criação de um pequeno servidor para esta finalidade.

## O que é Node.js ?

Node.js é um ambiente **runtime** de execução de códiogs JavaScript **fora do navegador**. Antes de ser inventado o JavaScript era executado somente nos navegadores web, porém, logo após seu surgimento o uso da liguagem foi muito além. 
Hoje JavaScript roda em apps nos nossos celulares Android e IOS, programas desktop, como é o caso do editor de texto da **Microsoft** o [Visual Studio Code](https://code.visualstudio.com/) (Usado por muitos Devs) e servidores no [back-end](https://www.digitalhouse.com/br/blog/back-end-o-que-e-para-que-serve-e-como-aprender).
Exemplos de empresas que usão o Node.js:

- Uber;
- Netflix;
- Linkedin;
- Microsoft.

## Ferramentas importantes usadas no projeto 

- [Node.js](https://nodejs.org/en/) instalado na máquina na versão [LTS](https://pt.wikipedia.org/wiki/Suporte_de_longo_prazo);
- Editor de texto;
- Navegador Web.

## Passo-a-passo

Criar uma pasta em um local de escolha na  máquina, por nome de **"hello"**, dentro da mesma criar um arquivo por nome **hello.js** (usamos .js para informar que é JavaScript). Dentro deste arquivo é propósta as seguintes etapas:

 1.  Importar o módulo http, que vem por padrão no node.js: 
 
	 ```js 
		const  http  =  require('http');	  
	 ```
	 A palavra reservada **const** usada se refere a uma constante (algo que não muda), foi dado a ela o nome de http, semelhante ao nome do módulo que foi chamado usando a diretiva **require** (requerer algo). 
	 
2. Criar um servidor usando uma função do módulo http, por nome **createServer**, que deve ser armazenada dentro de uma constante por nome **meuServidor**

	 ``` js 
	 const  meuServidor = http.createServer();	  
	 ```
      
    A função createServer é responsável por criar um novo servidor, e dentro desta recebemos outra função com uma [requisição e respósta](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview#:~:text=As%20mensagens%20enviadas%20pelo%20cliente,chamadas%20de%20respostas%20(responses)).
    
	
	```js 
	const meuServidor = http.createServer(function (requisicao, resposta) {});
	```

     A palavra reservada **function** se refere a uma **função**, no qual neste caso é **callback** (passada como parâmetro), que também recebe dois parâmetros, **"requisicao"**  e **"resposta"**. Dentro desta função deve se declarar o parâmetro **"resposta"** dando um cabeçalho para o mesmo, atrvés da função **setHeader**, que ele nos provê, definindo o conteúdo do cabeçalho como texto.

	```js 
	const meuServidor = http.createServer(function (requisicao, resposta) {
	 resposta.setHeader('Content-type', 'text/plain');
	});
	```
   Usando ainda **"resposta"** deve se usar o método **end** onde é exibida a mensagem de "Hello World"
	
	```js 
	const meuServidor = http.createServer(function (requisicao, resposta) {
	 resposta.setHeader('Content-type', 'text/plain');
	 resposta.end('Hello World');
	});	
	```
	 
3. Para finalizar usa-se constante ***"meuServidor"*** para chamar a função **listen** que recebe a <a  href="https://pt.wikipedia.org/wiki/Porta_(redes_de_computadores)">porta</a> que o projeto vai rodar e uma função para informar se deu tudo certo.
   
   ```js 
	meuServidor.listen(3000, function() {
		console.log('Servidor rodadno na porta 3000')
	});
   ```
    Deve se definir a porta como sendo **3000**, pois é a mais usada em desenvolvimento e o **console.log** para exibir uma mensagem no terminal/prompt.


## Arquivo completo

O resultado final de "hello.js" será este:

```js 	
// módulo http do node.js
const  http  =  require('http');

// criando meu servidor
const  meuServidor  =  http.createServer(function (requisicao, resposta) {
 resposta.setHeader('Content-type', 'text/plain');
 resposta.end('Hello World');
});

// Dando uma porta para o meu servidor
meuServidor.listen(3000, function() {
 console.log('Servidor rodando na porta 3000...');
});
```

## Executando arquivo "hello.js" 🚀

  
Para executar o projeto segue o seguinte processo: 

```bash     
	cd hello/
	node ./hello.js 
```

   Execute o terminal com Node.js já instalado, navegue até o diretório do projeto usando o comando **cd** e já no diretório aonde esta o arquivo execute **node** seguido de **./hello.js** que é o nome do arquivo na raiz do projeto.

```bash     
	cd hello/
	node ./hello.js 
```
   No terminal foi vista a mensagem informada:
   
```bash
	node ./hello.js
	Servidor rodando na porta 3000...
```

No navegador informe na barra de pesquisa localhost:3000 e o resultado final segue a baixo:

  



![Hello World](https://flaviocopes.com/docker-node-container-example/Screen%20Shot%202020-07-05%20at%2011.30.33.png)

Assim teremos um servidor que exibe "Hello World" em tela.