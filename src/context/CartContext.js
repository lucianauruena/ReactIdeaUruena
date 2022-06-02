import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const addProductToCart = (product) => {
        setCartListItems([product])
    }

    const data = {
        cartListItems
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }