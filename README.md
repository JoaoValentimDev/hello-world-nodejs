# Índice

-  [Introdução ao projeto](#introdução-ao-projeto)

-  [O que é Node.js ?](#o-que-é-nodejs-)

-  [Ferramentas](#ferramentas)

- [Execução do projeto](#execução-do-projeto)

- [Explicando "hello.js"](#explicando-hellojs)

  

## Introdução ao projeto

Este projeto tem como finalidade exibir a mensagem "Hello World" em tela para o usuário, usando o **Node.js**, um **runtime** de JavaScript. Foi usado o módulo [http](https://www.luiztools.com.br/post/http-para-programadores-node-js/) do Node.js, responsável pela criação de um pequeno servidor para esta finalidade. 



## O que é Node.js ?

Node.js é um ambiente **runtime** de execução de códigos JavaScript **fora do navegador**. Antes da criação do Node.js, o JavaScript era executado somente nos navegadores web, porém, logo após seu surgimento, o uso da linguagem foi muito além. 
Atualmente, JavaScript tem sua execução em apps em dispositivos Android e IOS, programas desktop, como é o caso do editor de texto da **Microsoft,** o [Visual Studio Code](https://code.visualstudio.com/) (Utilizado por muitos desenvolvedores) e servidores no [back-end](https://www.digitalhouse.com/br/blog/back-end-o-que-e-para-que-serve-e-como-aprender).
Exemplos de empresas que utilizam o Node.js:

- Uber;

- Netflix;

- Linkedin;

- Microsoft.

  

## Ferramentas 

Neste projeto foram utilizadas as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) (clique neste link para baixar), instalado na máquina na versão [LTS](https://pt.wikipedia.org/wiki/Suporte_de_longo_prazo); 

- Editor de texto :Bloco de Notas, Visual Studio Code, ou outro de sua preferência;

- Navegador Web.

  

## Execução do projeto

Para executar o projeto siga os seguintes passos:

1. Clone o repositório usando o comando **git** para um local de sua escolha:

   ```bash
   git clone https://github.com/JoaoValentimDev/hello-world-nodejs
   ```

2. Entre na pasta do projeto:

   ```bash
   cd hello/
   ```

3. Execute no seu terminal/cmd o comando **node** seguido do nome do arquivo JavaScript:

   ```bash
   node ./hello.js
   ```

   Após o comando ser executado, a seguinte mensagem aparecerá no seu console:
   
   ```bash
   Servidor rodando na porta 3000...
   ```

4. Deixe o terminal/prompt aberto e abra seu navegador de Internet. Na sequência, digite na barra de pesquisa "localhost:3000" e tecle ***Enter***.

    ![](https://flaviocopes.com/docker-node-container-example/Screen%20Shot%202020-07-05%20at%2011.30.33.png)

   Finalmente, aparecerá a frase na sua tela.

***Obs:*** Para que o comando **node** funcione, o **Node.js** deve estar instalado na sua máquina.




## Explicando "hello.js"

Em nosso arquivo "hello.js" temos os seguintes comandos:

```js
const http = require('http');

const meuServidor = http.createServer(function (requisicao, resposta) {
 resposta.setHeader('Content-type', 'text/plain');
 resposta.end('Hello World');
});

meuServidor.listen(3000, function() {
 console.log('Servidor rodando na porta 3000...');
});
```

Mas o que cada uma dessas linhas fazem?

A primeira linha é responsável por importar o módulo **http** a partir da diretiva **require**. Quando importamos um **módulo,** é comum uma constante receber o seu nome, para tal usamos a palavra reservada **const**, que define uma constante em JavaScript.   

```js
const  http  =  require('http'); 
```

Na segunda linha, iniciamos a criação de um pequeno servidor, este exibirá no navegador a nossa mensagem "Hello World". Usamos para esta ocasião a função **createServer**, que é própria do módulo **http**, para trabalhar com servidores. Ela recebe uma **requisição** e uma **resposta**.

Armazenamos tudo dentro de uma constante chamada "meuServidor", que usaremos depois.

```js
const  meuServidor  =  http.createServer(function (requisicao, resposta) {
 resposta.setHeader('Content-type', 'text/plain');
 resposta.end('Hello World');
});
```

Definimos então o cabeçalho de nossa resposta com **setHeader** , que dirá que o conteúdo retornado deve ser um texto. Para retornar essa mensagem, utilizamos a função **end**.

No fim do arquivo temos a função **listen** do **http**, responsável por dar uma porta para nosso servidor rodar, neste caso a **3000**. Também temos uma função que retornará uma mensagem no terminal/prompt, no nosso caso: "Servidor rodando na porta 3000...".

```js
meuServidor.listen(3000, function() {
 console.log('Servidor rodando na porta 3000...');
});
```

Assim temos tudo para nossa aplicação funcionar e exibir nossa mensagem no navegador.

![](https://flaviocopes.com/docker-node-container-example/Screen%20Shot%202020-07-05%20at%2011.30.33.png)
