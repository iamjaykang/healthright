import {combineReducers} from 'redux'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import {reducer as burgerMenu} from 'redux-burger-menu';
import productsReducer from './products/product.reducer';
import { sidepanelReducer } from './sidepanel/sidepanel.reducer';
import customersReducer from './customers/customer.reducer';
import paymentsReducer from './payments/payment.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    customers: customersReducer,
    products: productsReducer,
    cart: cartReducer,
    sidepanel: sidepanelReducer,
    payments: paymentsReducer,
    burgerMenu
})