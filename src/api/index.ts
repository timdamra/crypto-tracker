type FetchResponse = Promise<Response>;

interface ApiInterface {
    getCoinList(): FetchResponse;
    getCoin(id: string): FetchResponse;
    getTrendingCoins(): FetchResponse;
}

// for testing environment
export abstract class ApiProto {
    abstract getCoinList(): FetchResponse;
    abstract getCoin(): FetchResponse;
    abstract getTrendingCoins(): FetchResponse;
}

class Api implements ApiInterface {
    private fetchCoinListApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    private fetchCoinById = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}?localization=false`;
    private fetchTrendingCoins = "https://api.coingecko.com/api/v3/search/trending";

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

    getTrendingCoins(): FetchResponse {
        return fetch(
            this.fetchTrendingCoins
        )
    }
}

export const api = new Api();
