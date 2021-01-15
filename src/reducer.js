export const initialState = {
    basket:[{
        id:"3254354345",
        title:
        "New Apple ipad Pro (12.9-inch, wi-fi 128GB -silver (4th Generation)",
        price: 598.99,
       rating: 4,
       image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
                   { id:"23445930",
                    title:
                   "Amazon Echo (3rd generation | Smart Speaker With Alexa,Charcol Fabric)",
                    price:98.99,
                    rating: 5,
                    image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                   
                },
    
],
    user:null,
};

export const getBasketTotal = (basket) =>
 basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for Removing item from basket
            return {
                ...state,
                basket:[...state.basket, action.item]

            }
        case 'REMOVE_FROM_BASKET':
            //logic from removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];
 //we check to see if product exists,
 
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);

                if (index >= 0){

                //item exists in basket,remobe it
                newBasket.splice(index, 1);

            }else {
                console.warn(
                   'Cant remove product (id: ${action.id}) as its not in basket'
                )
            }
            return {
                ...state, 
                basket: newBasket}; 
        
        default:
            return state;
    }
}

export default reducer;