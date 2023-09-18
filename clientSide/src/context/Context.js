import {createContext, useReducer, useEffect} from "react"
import Reducer from './Reducer'

const INITIAL_STATE = {
    // retrieving the stored value and converting it into an object 
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

// ill read the current context value from the closest matching Provider above it in the tree.
export const Context = createContext(INITIAL_STATE);

// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
export const ContextProvider = ({children}) => {
    
    // state-- for info bout component and dispatch--trigger state changes to the store 
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);


    // To store the user at the local Storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);
    return(
        <Context.Provider 
        value={{
            user: state.user,
            isFetching: state.isFetching, 
            error: state.error,
            dispatch,
        }}>
        {children}

        </Context.Provider>
    );
};