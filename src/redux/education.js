import * as ActionTypes from './ActionTypes';

export const Education = (state = {
    isLoading : true,
    education : [],
    errmess = null
}, action) => {

    switch(action.type)
    {
        case ActionTypes.ADD_EDUCATION: 
            return {...state, isLoading: false, education: action.payload, errmess: null};
        
        case ActionTypes.EDUCATION_LOADING: 
            return {...state, isLoading: true, education: [], errmess: null};
        
        case ActionTypes.EDUCATION_FAILED: 
            return {...state, isLoading: false, education: [], errmess: action.payload};

        default: 
            return state;
    }

};