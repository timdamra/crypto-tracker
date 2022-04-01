export enum ActionTypes {
    SET_COIN_LIST = "SET_COIN_LIST",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
    SET_SELECTED_COIN = "SET_SELECTED_COIN"
}

export const setIsLoading = (bool: boolean): Action => {
    return {
        type: ActionTypes.SET_IS_LOADING,
        payload: bool
    }
}

export const setError = (error: string): Action => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: error
    }
}

export const resetError = (): Action => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: ""
    }
}

export const setCoinList = (coinList: CoinList): Action => {
    return {
        type: ActionTypes.SET_COIN_LIST,
        payload: coinList
    }
}
