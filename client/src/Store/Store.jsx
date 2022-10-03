import { configureStore, combineReducers} from '@reduxjs/toolkit'
import themeReducer from '../Slice/Theme'
import cartSlice from '../Slice/Cart'
import userSlice from '../Slice/user'
import purchaseSlice from '../Slice/purchases'



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
 

 const persistConfig = {
   key: 'root',
   version: 1,
   storage,
 }

 const rootReducer = combineReducers({
   settheme: themeReducer,
   cart: cartSlice,
   user: userSlice,
   purchase: purchaseSlice,
  
  })
 const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
   
})

export const persistor = persistStore(store)

