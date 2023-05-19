import cartReducer from './cartReducer'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const stripe = require('stripe')('sk_test_51MwsomSEaiVCCh5FZgCAzoeHEK06ZXt5tHQRtSYjz3faGYDlOjww6ggNLyy2zlgNv9LPeBLqUPycaNf6zAzgM9ej00Az9qyUik');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer:{
    cart: persistedReducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)