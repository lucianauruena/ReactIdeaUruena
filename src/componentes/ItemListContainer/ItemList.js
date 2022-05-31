import { useEffect, useState} from "react"

const ItemListContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         // setTimeout(() => {
    //             resolve(producto)
    //         // }, 2000)
    //     })
    // }


    useEffect(() => {
        // getItem()
        // .then( (res) => {
        //     console.log("Respuesta GetItem: ", res)
        //     setProduct(res)
        // })
        console.log("productFilter: ", productFilter)
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = productos.find( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemListContainer