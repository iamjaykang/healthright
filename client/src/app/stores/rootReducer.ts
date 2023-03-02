import {combineReducers} from 'redux'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import productsReducer from './products/product.reducer';
import { sidepanelReducer } from './sidepanel/sidepanel.reducer';
import customersReducer from './customers/customer.reducer';
import paymentsReducer from './payments/payment.reducer';
import hamburgerMenuReducer from './hamburgerMenu/hamburgerMenu.reducer';
import ordersReducer from './orders/order.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    customers: customersReducer,
    products: productsReducer,
    cart: cartReducer,
    sidepanel: sidepanelReducer,
    payments: paymentsReducer,
    orders: ordersReducer,
    hamburgerMenu: hamburgerMenuReducer
})