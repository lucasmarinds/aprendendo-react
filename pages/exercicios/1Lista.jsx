function listaTags(items = 20){
    const lista = [];
    for(var i = 1 ; i <= items; i++){
        lista.push(<span>{i}</span>);
    }
    return lista;
}

export default function exercicioLista(){
    return ( 
    <div>
        <div>
            {listaTags(10)}
        </div>
        <div>
            {listaTags(111)}
        </div>
    </div>
    )
}