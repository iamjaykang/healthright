import {combineReducers} from 'redux'
import { brandsReducer } from './brands/brand.reducer'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    brands: brandsReducer,
    cart: cartReducer
})