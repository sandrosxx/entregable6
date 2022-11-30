import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './slice/cart.slice'

import isLoadingSlice from './slice/isLoading.slice'
import productsSlice from './slice/products.slice'
import purchasesSlice  from './slice/purchases.slice'

export default configureStore({
    reducer: {
        product : productsSlice,
        isloading:isLoadingSlice,
        purchases : purchasesSlice,
        cart: cartSlice,
    }
})
