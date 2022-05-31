import CardList from "../componentes/CardList/CardList"
import { useEffect, useState } from "react"
import productos from "../util/productosLista"

const Home = () => {
    const [products, setProducts] = useState([])
        
    useEffect( () => {
        console.log("asdas")
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout(() => {
                resolve(productos)
            // }, 4000)
        })
    }  

    return(
        <div className='general-container'>
            <CardList title={'Productos Recomendados'} products={products}/>
        </div>
    )
}

export default Home