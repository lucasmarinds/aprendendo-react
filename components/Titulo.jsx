/** O parametro, props que colocamos em nossa funcao
 * serve para pegar tudo que é passado para nosso componente
 * como atributo em outro componente, veja no componente
 * pages/basico/usandoTitulo
 * lá no componente usandoTitulo verá que passamos para nosso
 * componente Titulo, 3 argumento sendo (principal,secundario e pequeno)
 * isso faz com que em nosso componente Titulo com o parametro props
 * podemos pegar e usar os argumentos passados na hora que usaram nosso
 * componente.
 */
export default function Titulo(props){
    console.log(props);
    if(props.pequeno){
        return (
            <>
            <p>existe a props pequeno sendo passada, logo</p>
            <p>vou renderizar essa parte! do titulo e não a de baixo!</p>
            </>
        )
    } else {
        return (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
            </>
        )
    }
}