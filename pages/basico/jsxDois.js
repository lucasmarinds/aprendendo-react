/** Por questoes de legibilidade de projeto
 * utilizamos do () e dentro colocamos nossos elementos html
 * igual exemplo abaixo.
 */
export default function testando(){
    const conteudo = (
        <div>
            <h1>JSX!!!</h1>
        </div>
    )
    return conteudo;
};

/** Caso no retorno vc queira adicionar a div e o h1, a sua primeira tag PRECISA
 * estar na mesma linha do return se não ele não reconhecerá o código.
 */