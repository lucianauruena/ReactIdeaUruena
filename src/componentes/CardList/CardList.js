import { useState, useEffect } from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import productos from "../../util/productosLista"
import { useParams } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Firestore
import db from '../../util/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";


const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

//     useEffect( () => {
//         setProducts([])
// //         getProducts()
//         // .then( (response) => {
//             category ? filterByCategory(productos, category) : setProducts(productos)
//         // })
//     }, [category])

useEffect( () => {
    setProducts([])
    console.log()
    getProducts()
    .then( (productos) => {
        category ?  filterFirebase() : setProducts(productos)
    })
}, [category])

const getProducts = async () => {
    const productCollection = collection(db, "productos")
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        // console.log("product: ", product)
        return product
    })
    return productList
}

    
    // const getProducts = () => {
    //     return new Promise( (resolve, reject) => {
    //             resolve(productos)
    //     })
    // }  

    // const filterByCategory = (array, category) => {
    //     return array.map( (item) => {
    //         if(item.category === category) {
    //             return setProducts(products => [...products, item])
    //         }
    //     })
    // }

    const filterFirebase = async () => {
        const productRef = collection(db, 'items')
        const queryResult = query(productRef, where("category", "==", category));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
    }
    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            modules={[Pagination, Navigation]}
            navigation={true}            
        >
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <SwiperSlide key={id}>
                            <CardItem 
                                title={title} 
                                price={price} 
                                image={image} 
                                stock={stock} 
                                id={id}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        ) : <div className='list-result-prods'>{products.map( ({title, price, image, id, stock}) => <CardItem title={title} price={price} image={image} stock={stock} id={id} />)}</div>}
        </Grid>
        </>
    )
}

export default CardList