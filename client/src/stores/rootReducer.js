import {combineReducers} from 'redux'
import { brandsReducer } from './brands/brand.reducer'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import {reducer as burgerMenu} from 'redux-burger-menu';

export const rootReducer = combineReducers({
    user: userReducer,
    brands: brandsReducer,
    cart: cartReducer,
    burgerMenu
})