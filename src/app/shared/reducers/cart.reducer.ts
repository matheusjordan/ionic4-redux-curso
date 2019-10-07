import { CartModel } from '../models/cart.model';
import { ActionModel } from '../models/action.model';
import { ActionTypes } from '../actions/cart.action';


export const cart = new CartModel();

export function cartReducer(state = cart, action: ActionModel) {

    switch (action.type) {
        case ActionTypes.Add:
            cart.products.push(action.payload);
            cart.total += action.payload.price;
            break;

        case ActionTypes.Remove:
            cart.products.splice(cart.products.indexOf(action.payload), 1);
            cart.total -= action.payload.price;
            break;

        case ActionTypes.Clear:
            cart.products = [];
            cart.total = 0;
            break;

        default:
            return state;
    }

    return state;
};

