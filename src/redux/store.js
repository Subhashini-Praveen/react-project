import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import productReducer from './productsSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const PersistReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
    reducer: {
        products: PersistReducer
    }
});

export const persistor = persistStore(store);
export default store;