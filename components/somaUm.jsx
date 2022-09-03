export default function SomaUm(props){
     // props.numero++; <- Como props é somente leitura isso vai retornar um erro
     // Esse de baixo funciona porque nao estou modificando o props que é somente leitura.
     const somatotal = 1 + props.numero;
   return (
        <>
            <h1>{somatotal}</h1>       
        </>
    )  
}