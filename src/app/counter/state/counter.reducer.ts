

import { createReducer, on } from "@ngrx/store";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState, 
    on(increment, (state) =>{
        return{
            ...state,
               counter:state.counter +1,
        
        };
    }),

    on(decrement, (state) =>{
        return{
            ...state,
               counter:state.counter -1,
        
        };
    

    }),

    on(reset, (state) =>{
        return{
            ...state,
               counter:0,
        
        };
    

    }),on(customIncrement,(state, action) =>{
            console.log(action)
        return{
            ...state,
            counter:state.counter + action.count,
        }
    }),on(changeChannelName, state =>{
        return{
            ...state,
            ChannelName:'Modified Prajyot Bhopale',
        }
    })
    
)
export function counterReducer(state:any,action:any){
    return _counterReducer(state, action);
}