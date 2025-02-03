import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
};
export const productsListApi = createAsyncThunk(
    'productslist', async () => {
        const data = await axios.get('http://localhost:4000/products');
        // console.log('response------', data);
        return data.data;
    }
);
export const addProductApi = createAsyncThunk(
    'addProduct', async (payload) => {
        console.log(payload, '----payload');
        const data = await axios.post('http://localhost:4000/products', payload);
        // console.log('response------', data);
        return data.data;
    }
);
export const deleteApi = createAsyncThunk(
    'addProduct', async (id) => {
        console.log(id, '----payload');
        const data = await axios.delete('http://localhost:4000/products/' + id);
        return data.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {
    //     addProduct: (state, action) => {
    //         console.log(state.products.products, '---products list');
    //         state.products.products.push(action.payload);
    //     }
    extraReducers: (builder) => builder 
        .addCase(productsListApi.fulfilled, (state, action) => {
            // console.log('action loss-----', action.payload);
                 void(state.products = action.payload);
            //  return [...action.payload];
        })
        .addCase(addProductApi.fulfilled, (state, action) => {
            console.log('action loss-----', action.payload);
                 void(state.products.push(action.payload));
            //  return [...action.payload];
        })
});

export default productsSlice.reducer;