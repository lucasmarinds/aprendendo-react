import Estilo from "../../components/UsandoEstilo"

//** Veja que aqui eu setei um props do tipo numero e um color para o Component UsandoEstilo. */
export default function Integracao3(){
    return (
        <>
            <Estilo numero={5} color="white" direcao/>
            <Estilo numero={-5} color="aqua" direcao={false}/>
        </>
    )
}