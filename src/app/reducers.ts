import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}

export const clockReducer = (state = new Date(), {type}) => {
    const date = new Date(state.getTime());
    switch (type) {
        case 'second':
            date.setSeconds(date.getSeconds() + 1)
            return date;
        case 'hour':
            date.setHours(date.getHours() + 1)
            return date;
    }
    
    return state;
}