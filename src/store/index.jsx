import { configureStore } from '@reduxjs/toolkit'

import isLoadingSlice from './slice/isLoading.slice'
import productsSlice from './slice/products.slice'

export default configureStore({
    reducer: {
        product : productsSlice,
        isloading:isLoadingSlice
    }
})
