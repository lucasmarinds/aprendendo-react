Essa é uma aplicação em [Next.js](https://nextjs.org/) criada com o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Para startar a app 

Rodando o Servidor

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser para acessar a aplicação.

#
## Iniciando com NextJS
Algo que deve saber primeiramente que com o NextJS a navegação entre paginas é extremamente boa por conta que para podermos acessar uma pagina de um componente ativo, basta criarmos esse componente ou pagina dentro da pasta pages, igual temos com as pastas de aprendizado que é a basico/componentes entre outros, isso é uma facilidade que o nextJS nos fornece em sua estrutura. Para acessarmos um componente funcional basta colocarmos.<br>
[http://localhost:3000/basico/primeiro](http://localhost:3000/basico/primeiro)<br>
Bom agora que já sabe o inicio, vamos dar continuidade.

#
## JSX
Esse é como podemos inserir código HTML dentro de códigos JS ou TS, exemplo:
```bash
JSX
export default funcaoUm(){
    return <h1>Ola Mundo</h1>
}
Sem JSX
export default funcaoDois(){
    return "Ola Mundo"
}
```
Com o JSX podemos passar já tags de HTML dentro de nosso código JS, isso é possivel porque o REACT, por de baixo traduz em código JS ou ele já manipula o DOM de vez de criar um elemento do tipo react etc... para poder ser executado no browser, porquse se no console você tentar rodar as 2 funções uma irá funcionar que seria a funcaoDois enquanto a primeira o browser nao entenderia porque tem uma tag HTML dentro do retorno da funcaoUm.

#
## CSS
### REACT
Em react a utilização de CSS em componentes é feita de maneira global logo, você só precisa ficar atento ao className de seus elementos e suas hierarquias no css.
### NEXTJS
Com nextJS isso é mais organizado porque o NEXTJS trás com a mesma intenção que outros frameworks de JS como Angular de deixar o CSS mais responsavel possivel, digo de vez de deixarmos o CSS como escopo global, ele trás uma outra maneira mais segura também que seria CADA COMPONENTE tem seu CSS, mas também não te impede de ter css global para suas paginas, em NEXT dentro de pages/ temos o arquivo _app.js e dentro dele perceba que tem um import " import '../styles/globals.css' " e nesse css todas as paginas que estão dentro de pages que tem as mesmas classNames que tem no arquivo globals.css que está sendo importado usaram o estilo do globals.



