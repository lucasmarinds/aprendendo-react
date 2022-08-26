import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return (
        <>
        <Titulo 
        principal="Pagina de Cadastro"
        secundario="Incluir, Alterar, Excluir coisas!" 
        />
        <Titulo
        principal="Pagina de Cadastro"
        secundario="Incluir, Alterar, Excluir coisas!" 
        pequeno
        />
        </>
    )
}