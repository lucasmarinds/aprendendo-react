import SomaUm from "../../components/somaUm";

/** Isso aqui é para o dev saber que quando passamos
 * algum valor no props para o componente ele ter ciencia
 * que esse valor nao pode ser modificado ou alguma coisa do tipo
 * e que o props é apenas um valor que so pode ser LIDO
 * para ver como renderiza va no components/somaUm.
 * @returns renderiza a pagina do vaor de props + 1
 */
export default function propsSomenteLeitura(){
    return (
        <>
            <SomaUm numero={99} />
        </>
    )
}