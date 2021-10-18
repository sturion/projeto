import React from "react"
import Card from "./layout/Card";
import produtos from '../data/produtos'

function getProdutosListItem() {
    return produtos.map (prod => {
        return <li key={prod.id}>
            <div className={`${prod.game}Players`}>
            <img src={prod.imagem} className="CardImage"/>
            {prod.id} - {prod.nome} - R$ {prod.preco}
            <Card>{prod.nome}</Card>
            </div>
            </li>
    })
}

const Repeticao = () => {

    return (
        <div>
            <h2>Repeat</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}
export default Repeticao;