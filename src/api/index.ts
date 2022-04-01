type FetchResponse = Promise<Response>;

interface ApiInterface {
    getCoinList(): FetchResponse;
    getCoin(id: string): FetchResponse;
}

// for testing environment
export abstract class ApiProto {
    abstract getCoinList(): FetchResponse;
    abstract getCoin(): FetchResponse;
}

class Api implements ApiInterface {
    private fetchCoinListApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    private fetchCoinById = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}?localization=false`;

    getCoinList(): FetchResponse {
        return fetch(
            this.fetchCoinListApi
        )
    }

    getCoin(id: string): FetchResponse {
        return fetch(
            this.fetchCoinById(id)
        )
    }
}

export const api = new Api();
