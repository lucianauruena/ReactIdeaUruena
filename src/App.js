import './App.css';
import './test.css'
import NavBar from './componentes/NavBar/NavBar'
import CardList from './componentes/CardList/CardList';
import Modal from './componentes/Modal/Modal'
import { useState, useEffect } from 'react';

// import { dateFormat } from './componentes/navbar/navbar'

function App() {
  const [open, setOpen] = useState(false)
  
  const handleClose = () => {
    setOpen(false)
  }

  const [products, setProducts] = useState([])
  const productos = [
    {
      title: 'The Water',
      price: 200,
      image: 'carta-agua.png', 
      stock: 5,
      id: 1
    },
    { 
      title: 'The Wood',
      price: 200,
      image: 'carta-elbosque.png', 
      stock: 5,
      id: 1
    },
    {
      title: 'The Nothing',
      price: 200,
      image: 'carta-lanada.png', 
      stock: 4,
      id: 1
    },
    {
      title: 'The Voice',
      price: 200,
      image: 'carta-lavoz.jpg', 
      stock: 5,
      id: 1
    }
  ]

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })

  }

  useEffect( () => {
    getProducts()
    .then( (response) => {
      //console.log("Then: Respuesta promesa: ", response)
      setProducts(response)
    })
    .catch ( (err) => {
      //console.log("Catch: Fallo la llamada.", err)
    })
    .finally( () => {
      //console.lo("Finally: termino la promesa")
    })
  }, [])

  return (
    //JSX
    <div className="App" >
      <NavBar />
      <div className='general-container'>
        <CardList title ={'Productos recomendados'} products={productos}/>
    </div>
    <button onClick={() => setOpen(true)}>Abrir modal</button>
    </div>
  );
}

export default App;
