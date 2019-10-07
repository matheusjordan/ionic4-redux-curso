import { ProductModel } from '../models/product.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (product: ProductModel) => {
    return <Action>{ type: ActionTypes.Add, payload: product };
};


export const Remove = (product: ProductModel) => {
    return <Action>{ type: ActionTypes.Remove, payload: product };
};

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
};
