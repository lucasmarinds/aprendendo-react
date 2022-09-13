/** Veja que aqui eu uso o double mustache {{}} para passar parametros que sao elementos
 * do css.
 * @param {*} props 
 * @returns 
 */
export default function Estilo(props){
    
    // Poderia apenas passar o objeto para o style, mas assim fica pior para escrever o codigo css, pq ele nao te fornece complete.
    const estiloDaPagina = {backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
    color: props.color,
    textAlign: props.direcao ? "right" : "left" //Ele vai para a direita caso tenha o direcao como props sendo passado.
    }

    // Veja que na chamada do componente o que recebe 5, tem o h2 como verde e o h1 como backgound verde com texto branco para a direita.z
    const classeAplicada = props.numero > 0 ? "verde" : "roxo"

    return (
        <>
            <h1 style={{backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                        color: props.color,
                        textAlign: props.direcao ? "right" : "left" //Ele vai para a direita caso tenha o direcao como props sendo passado.
                        }}>
                Texto #1
            </h1>   

            <h2 className={classeAplicada}>Texto #2</h2>
        </>
    )
}