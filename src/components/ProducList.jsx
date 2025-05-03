// ajudantes do react pra construção de uma aplicação 
import { useEffect, useState } from "react"
import { api } from "../services/api"

// inserir produtos.
function ProductList() {
    const { products, setProducts } = useState([])

    useEffect(() => {
        api.get('/products')
            .then(res => {
                setProducts(res.data)
            }) //lista de produtos 
            .catch(err => {
                console.error('Erro ao buscar produtos', err)
            })
    }, [])

    return (
        <div>
            <h2>Produtos:</h2>
            {products.length === 0 &&
                <p>carregando...</p>}

            <ul>
                {products.map((product) => {
                    <li key={product.id}>
                        <strong>{product.title}</strong>
                        <br />R$ {product.price} <br />
                        <img src={Product.image} alt={product.title}
                        width={100}
                        />
                    </li>
                })}
            </ul>

        </div>
    )
}