import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';

const ItemDetail = ({data}) => {
    const [size, setSize] = useState('');
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const addProductToCart = () => {
        console.log("AGREGAR: ", data)
        console.log("CANTIDAD:", cantidad )
    }

    console.log("Data desde ItemDetail: ", data)
    return (
        <div className='detail-product-container'>
            <div className="detail-product-image">
                <img src={`/${data.image}`} alt="imgProduct"/>
            </div>
            <div className="detail-product-info">
                <div className='detail-product-info__title'>
                    <h2>{data.title}</h2>
                    <FavoriteBorderIcon  />
                </div>
                <p>$ {data.price}</p>
                <span>3 Cuotas sin interés de $ {data.price / 3}</span>

                {!showButton ?
                <ItemCount 
                    cantidad={cantidad}
                    setShowButton={setShowButton}
                    setCantidad={setCantidad}
                />
                :
                <Button variant='outlined'><Link to='/Cart'>Termina mi compra</Link></Button>
                }
            </div>
        </div>
    )
}

export default ItemDetail