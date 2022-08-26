/** Quando criamos arquivos do tipo JSX
 * o NEXTJS e o REACT interpretam esse tipo 
 * facilmente até facilitando de escrever TAGS
 * HTML dentro de nosso componente utilizando como exemplo
 * h1#titulo_page>h2#subtitulo_page
 * e então o vscode ja vai oferecer para vc apertar enter e ja
 * criar toda estrutura do seu HTML.
 */
export default function jsxTres(){
    return (
        <div id="teste">
            <h1 id="titulo">
                <h2 id="subtitulo"></h2>
            </h1>
        </div>
    )
}