import { createContext, useState, useContext } from "react"

const CartContext = createContext([]);

export function useCartContext() { return useContext(CartContext)};

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState ([]);

    function addToCart(item) {
        if (isInCart(item.id)) {
            const prod = cartList.find((p) => p.id === item.id);
            const { quantity } = prod;
            prod.quantity = item.quantity + quantity;
            const newCart = [ ...cartList ];
            setCartList(newCart);
        } else {
            setCartList([ ...cartList, item ]);
        }
    }

    function emptyCart() {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.some( prod => prod.id === id)
    }

    const removeOne = (id) => {
        setCartList(cartList.filter(p => p.id !== id));
    }

    const totalAmount = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0);
    }

    const quantity = () => {
        return cartList.reduce((acum, item) => acum += item.quantity, 0);
    }

    return <CartContext.Provider value={{
        cartList,
        addToCart,
        emptyCart,
        removeOne,
        totalAmount,
        quantity
    }}>
        {children}
        </CartContext.Provider>
}