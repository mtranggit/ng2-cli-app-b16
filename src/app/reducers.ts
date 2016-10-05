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
export const clockReducer: ActionReducer<Date> = (state = new Date(), {type, payload} = { type: ""}) => {
    const date = new Date(state.getTime());
    switch (type) {
        case SECOND:
            date.setSeconds(date.getSeconds() + payload)
            return date;
        case HOUR:
            // console.log("Payload: ", payload);
            date.setHours(date.getHours() + payload)
            return date;
        default:
            return state;
    }
    
}

export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';

export interface PeopleState {
    name: string,
    time: Date
}
const defaultPeople: Array<PeopleState> = [
    { name: "John", time: clockReducer(new Date(), { type: "", payload: 0}) },
    { name: "Sarah", time: clockReducer(new Date(), { type: "", payload: 0}) },
    { name: "Drew", time: clockReducer(new Date(), { type: "", payload: 0}) },
    { name: "Joel", time: clockReducer(new Date(), { type: "", payload: 0}) },
    { name: "Rob", time: clockReducer(new Date(), { type: "", payload: 0}) }
];
export const peopleReducer: ActionReducer<any> = ( state = defaultPeople, { type, payload }) => {
    switch(type) {
        case ADVANCE: {
            // return state.filter( person => person === payload)
            //     .map( person => ({ name: person.name, time: clockReducer(person.time, {type: HOUR, payload: 5 })}) )
            return state.map( (person) => {
                if (payload === person) {
                    return { name: person.name, time: clockReducer(person.time, {type: HOUR, payload: 3 })}
                }
                return person;
            })
            
        }
        case RECALL: {
            return state.map(person => ({name: person.name, time: payload}));
        }
        default:
            return state;
    }
}