import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        //add items to cart

        //delete items from cart
        
        //remove product from cart

        //empty cart


    }
})

export const {} = cartSlice.actions

export default cartSlice.reducer