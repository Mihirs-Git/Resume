import * as ActionTypes from './ActionTypes';

export const Accomplishments = (state = {
    isLoading : true,
    accomplishments : [],
    errmess: null
}, action) => {

    switch(action.type)
    {
        case ActionTypes.ADD_ACCOMPLISHMENTS: 
            return {...state, isLoading: false, accomplishments: action.payload, errmess: null};
        
        case ActionTypes.ACCOMPLISHMENTS_LOADING: 
            return {...state, isLoading: true, accomplishments: [], errmess: null};
        
        case ActionTypes.ACCOMPLISHMENTS_FAILED: 
            return {...state, isLoading: false, accomplishments: [], errmess: action.payload};

        default: 
            return state;
    }

};