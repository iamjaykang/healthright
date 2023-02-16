import {combineReducers} from 'redux'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import {reducer as burgerMenu} from 'redux-burger-menu';
import productsReducer from './products/product.reducer';
import { sidepanelReducer } from './sidepanel/sidepanel.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    sidepanel: sidepanelReducer,
    burgerMenu
})