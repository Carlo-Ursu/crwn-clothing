import {createContext, useReducer} from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : payload
            }

        default :
            throw new Error(`There was an error type ${type} at userReducer`)
    }

}

const INITIAL_STATE = {
    currentUser: localStorage.getItem('currentUsername')
}

export const UserProvider = ({children}) => {
    const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    console.log(currentUser)
    
    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user
        });
    }

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}