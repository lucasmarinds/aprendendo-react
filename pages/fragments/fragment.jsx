import React from "react"

/** Fragment
 * é uma maneira de colocarmos mais de um elemento na tela, sem que precise estar
 * dentro de uma tag <div> igual fizemos no exercicios/1Lista. O fragment serve
 * exatamente para não criarmos div ou algo do tipo e sim só colocarmos as tags
 * que queremos, essa é uma maneira e a outra maneira esta no fragment2.jsx.
 */
export default function seila(){
    return (
        <React.Fragment>
        <h1>Fragment 1</h1>
        <h2>Fragment 2</h2>
        </React.Fragment>
    )
}