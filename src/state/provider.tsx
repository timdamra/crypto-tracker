import { useContext, useReducer, createContext, useCallback } from 'react';

import { ActionTypes } from './actions';

const defaultState: AppState = {
    coinList: [],
    isLoading: false,
    error: ""
}

const reducer = (
    state: AppState = defaultState,
    action: Action
): AppState => {
    switch(action.type) {
        case ActionTypes.SET_COIN_LIST:
            return {
                ...state,
                coinList: action.payload
            }
        case ActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

const AppContext = createContext<AppContext>({ state: defaultState, dispatch: () => {} });

export const useAppContext = () => useContext(AppContext);

export const StateContextProvider = ({ children }: { children: React.ReactChild }) => {
    const [state, stateUpdater] = useReducer(reducer, defaultState);
    const dispatch = useCallback(stateUpdater, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
