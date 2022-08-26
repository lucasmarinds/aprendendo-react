/** Para colocarmos valores JS na hora de renderizar
 * a pagina utilizamo do {} e dentro colocamos 
 * o código em JS.
 * @returns renderiza nossa pagina.
 */
export default function quatro(){
    const subtitulo = "Testando";
    const testandoJSX = <div><h3>testando</h3></div> // - PESSIMA pratica, JSX como valor. 
    return (
        <div>
            <h1>Integração JSX e JS</h1>
            <h2>{subtitulo}</h2>
            <h3>{Math.max(10,20,44,30)}</h3>
            {testandoJSX}
        </div>
    )
};