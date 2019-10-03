const products = [
    {
        productName : "Original.", 
        price: 5.00
    }
]

const cartReducer = (state, action) => {
    if (state === undefined) {
        return {
            forSell : products,
            cart :[]
        }
    }
    switch (action.type) {
        case 'ADD_TO_CART': {
            const cart = [...state.cart, action.item]
            return {
                ...state,
                 cart
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart]
            cart.splice(action.index, 1)
            return {
                ...state,
                 cart
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducer
