import { ActionReducer, Action } from '@ngrx/store';

/* Couner Reducers */
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


/* Clock Reducers */
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const clockReducer: ActionReducer<Date> = (state = new Date(), {type, payload}) => {
    const date = new Date(state.getTime());
    switch (type) {
        case SECOND:
            date.setSeconds(date.getSeconds() + payload)
            return date;
        case HOUR:
            date.setHours(date.getHours() + payload)
            return date;
    }
    
    return state;
}