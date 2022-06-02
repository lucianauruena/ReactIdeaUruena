import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

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
                <p>{data.price}</p>
                <span>3 Cuotas sin interés de $ {data.price / 3}</span>
            </div>
        </div>
    )
}

export default ItemDetail