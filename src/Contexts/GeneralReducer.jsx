

export default function GeneralReducer(state, action) {
    switch(action.type) {
        case "LOAD_CATEGORY":
            return {...state, categories: Array.isArray(action.payload) ? [...action.payload] : []};
        case "REMOVE_FROM_CART":
            /* ...state: this is made of cart and products, so we are spreading all the existing items on the state  */
            /* cart: -> here we are excluding an item, the method used for that already retunrs an array so there is no need to have cart:[]
                -cart: -> here we want to have access to the the cart state specifically
                -state.cart.filter: here we use the filter method, it will return all items that pass the logical check inside of the function
                -(cartItem => cartItem.id !== action.payload.id): we are taking each item in the cart and comparing the cartItem id with the item id that comes from the payload (an item already in the cart that we want to exclude)
                    -if the cartItem id is different from the id of the item we want to exclude then we add the item back into the array
                    -if the cartItem id is equal to the payload item Id then we exclude it from the array, deleting it from the cart
            */
            return {...state, cart:state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
        case "CHANGE_QTY_FROM_CART":
            /* ...state: this is made of cart and products, so we are spreading all the existing items on the state  */
            /* cart: -> here we are chaging the quantity if an item in the cart, the method used for that already returns an array so there is no need to have cart:[]
                -cart: -> here we want to have access to the the cart state specifically
                -state.cart.map: here we are generating a new array using the old array as a base
                -item => item.id === action.payload.id ? {} : () -> checks if the current item has the same id as the item we intend to change the quantity
                    -{ ...item, qty: parseInt(action.payload.qty) }: if the item has the same id then spread the properties of the item and just modify the quantity
                    - item: if the items does not have the same id then we just return the item without any modification
            */
            return {...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: parseInt(action.payload.qty) } : item )}
        default:
            return state;   
    } 
}