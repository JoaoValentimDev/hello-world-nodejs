# Índice



-  [Hello World em Node.js](#hello-world-em-nodejs)

-  [O que é Node.js ?](#o-que-é-nodejs-)

-  [Ferramentas importantes usadas no projeto](#ferramentas-importantes-usadas-no-projeto)

-  [Execução do projeto](#execucao-do-projeto-)
- [Explicando hello.js](#explicando-hello-js-)



## Hello World em Node.js 



Este projeto tem como finalidade exibir a mensagem "Hello World" em tela para o usuário, usando o **Node.js**, um **runtime** de JavaScript. Foi usado o módulo [http](https://www.luiztools.com.br/post/http-para-programadores-node-js/) do Node.js, responsável pela criação de um pequeno servidor para esta finalidade.



## O que é Node.js ?



Node.js é um ambiente **runtime** de execução de códigos Javascript **fora do navegador**. Antes de ser inventado o Javascript era executado somente nos navegadores web, porém, logo após seu surgimento o uso da liguagem foi muito além. 
Hoje JavaScript roda em apps nos nossos celulares Android e IOS, programas desktop, como é o caso do editor de texto da **Microsoft** o [Visual Studio Code](https://code.visualstudio.com/) (Usado por muitos Devs) e servidores no [back-end](https://www.digitalhouse.com/br/blog/back-end-o-que-e-para-que-serve-e-como-aprender).
Exemplos de empresas que utilizam o Node.js:

- Uber;

- Netflix;

- Linkedin;

- Microsoft.

  

## Ferramentas usadas no projeto 

Neste projeto foram usadas as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) instalado na máquina na versão [LTS](https://pt.wikipedia.org/wiki/Suporte_de_longo_prazo);
- Editor de texto;
- Navegador Web.



## Execução do projeto



Para executar este projeto basta fazer o download diretamente deste repositório e salvar o arquivo em uma pasta da sua escolha em sua máquina.

Ele virá como  **".zip"** extraia os arquivos e siga as seguintes etapas:

1. Clone o repositório usando o comando **git** para um local de sua escolha:

   ```bash
   git clone https://github.com/JoaoValentimDev/hello-world-nodejs
   ```

   

2. Entre na pasta do projeto:

   ```bash
   cd hello/
   ```

3. Execute no seu terminal/cmd o comando **node** seguido do nome do arquivo Javascript:

   ```bash
   node ./hello.js
   ```

   Após o comando ser executado a seguinte mensagem vai aparecer no seu console a mensagem **"Servidor rodando na porta 3000..."**.

4. Deixe o terminal/prompt aberto e abra seu navegador de Internet. Em sequencia digite na barra de pesquisa localhost:3000 e tecle enter.

    ![](https://flaviocopes.com/docker-node-container-example/Screen%20Shot%202020-07-05%20at%2011.30.33.png)

   Surpresa!!!  

  

***obs:*** Para que os comando **node**  funcione, o mesmo deve estar instalado na sua máquina.





## Explicando "hello.js"



Em nosso arquivo "hello.js" temos os seguintes comandos:

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

Mas o que cada uma dessas linhas fazem?

A primeira linha é responsável por importar o módulo **http** a partir da diretiva **require**. Quando importamos módulos é comum dar uma constante com  o nome do mesmo, para tal usamos a palavra reservada **const**, que define uma constante em Javascript.   

```js
const  http  =  require('http'); 
```



Na segunda linha iniciamos a criação de um pequeno servidor, este será usado para exibir no navegador a nossa mensagem de "Hello World". Usamos para essa ocasião a função **createServer** que é própria do módulo **http** para trabalhar com servidores. Ela recebe uma **requisição** e uma **resposta**.

Armazenamos isso tudo dentro de uma constante chamada "meuServidor", que usaremos no futuro.

```js
const  meuServidor  =  http.createServer(function (requisicao, resposta) {
 resposta.setHeader('Content-type', 'text/plain');
 resposta.end('Hello World');
});
```

Essa função nos devolverá uma resposta do tipo texto, pois, assim informamos na função **setHeader** da mesma. Também precisamos devolver nosso "Hello World", para tal usamos a função **end**, retornando nossa mensagem.

No fim do arquivo temos a função **listen** do **http**, responsável por dar uma porta para nosso servidor rodar, neste caso a 3000. Também temos uma função que retornará uma mensagem no terminal/prompt, no caso "Servidor rodando na porta 3000...".

```js
meuServidor.listen(3000, function() {
 console.log('Servidor rodando na porta 3000...');
});
```

Assim temos tudo para nossa aplicação funcionar e exibir nossa mensagem no navegador.



![](https://flaviocopes.com/docker-node-container-example/Screen%20Shot%202020-07-05%20at%2011.30.33.png)

  



