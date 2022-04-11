type StringOrNumber = string | number;
type StringOrNull = string | null;
type NumberOrNull = number | null;
type ArrayOfStrings = string[];

interface Currencies<T> {
    [key: string]: T;
    usd: T;
}

interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: string | number | null;
    last_updated: string;
}

type CoinList = Coin[];

interface AppState {
    coinList: CoinList;
    isLoading: boolean;
    error: string;
}

interface AppContext {
    state: AppState;
    dispatch: React.Dispatch;
}

interface Action {
    type: 
      | "SET_COIN_LIST"
      | "SET_IS_LOADING"
      | "SET_ERROR"
      | "SET_SELECTED_COIN";
    payload: any;
}

interface CommunityData {
    facebook_likes: NumberOrNull;
    reddit_accounts_active_48h: NumberOrNull;
    reddit_average_comments_48h: NumberOrNull;
    reddit_average_posts_48h: NumberOrNull;
    reddit_subscribers: NumberOrNull;
    telegram_channel_user_count: NumberOrNull;
    twitter_followers: NumberOrNull;
}

interface DeveloperData {
    closed_issues: number;
    code_additions_deletions_4_weeks: { additions: number, deletions: number };
    commit_count_4_weeks: number;
    forks: number;
    last_4_weeks_commit_activity_series: any[];
    pull_request_contributors: number;
    pull_requests_merged: number;
    stars: number;
    subscribers: number;
    total_issues: number;
}

interface Links {
    announcement_url: ArrayOfStrings;
    bitcointalk_thread_identifier: StringOrNull;
    blockchain_site: ArrayOfStrings;
    chat_url: ArrayOfStrings;
    facebook_username: string;
    homepage: ArrayOfStrings;
    official_forum_url: ArrayOfStrings;
    repos_url: { github: ArrayOfStrings, bitbucket: ArrayOfStrings };
    subreddit_url: string;
    telegram_channel_identifier: string;
    twitter_screen_name: string;
}

interface TickerData {
    base: string;
    bid_ask_spread_percentage: number;
    coin_id: string;
    converted_last: { btc: number, eth: number, usd: number };
    converted_volume: { btc: number, eth: number, usd: number };
    is_anomaly: boolean;
    is_stale: boolean;
    last: number;
    last_fetch_at: string;
    last_traded_at: string;
    market: { name: string, identifier: string, has_trading_incentive: boolean };
    target: string;
    timestamp: string;
    token_info_url: StringOrNull;
    trade_url: string;
    trust_score: string;
    volume: number;
}

interface MarketData {
    ath: Currencies<number>;
    ath_change_percentage: Currencies<number>;
    ath_date: Currencies<string>;
    atl: Currencies<number>;
    atl_change_percentage: Currencies<number>;
    atl_date: Currencies<string>;
    circulating_supply: number;
    current_price: Currencies<number>;
    fdv_to_tvl_ratio: string | number | null;
    fully_diluted_valuation: Currencies<number>;
    high_24h: Currencies<number>;
    last_updated: string;
    low_24h: Currencies<number>;
    market_cap: Currencies<number>;
    market_cap_change_24h: number;
    market_cap_change_24h_in_currency: Currencies<number>;
    market_cap_change_percentage_24h: number;
    market_cap_change_percentage_24h_in_currency: Currencies<number>;
    market_cap_rank: number;
    max_supply: number;
    mcap_to_tvl_ratio: string | number | null;
    price_change_24h: number;
    price_change_24h_in_currency: Currencies<number>;
    price_change_percentage_1h_in_currency: Currencies<number>;
    price_change_percentage_1y: number;
    price_change_percentage_1y_in_currency: Currencies<number>;
    price_change_percentage_7d: number;
    price_change_percentage_7d_in_currency: Currencies<number>;
    price_change_percentage_14d: number;
    price_change_percentage_14d_in_currency: Currencies<number>;
    price_change_percentage_24h: number;
    price_change_percentage_24h_in_currency: Currencies<number>;
    price_change_percentage_30d: number;
    price_change_percentage_30d_in_currency: Currencies<number>;
    price_change_percentage_60d: number;
    price_change_percentage_60d_in_currency: Currencies<number>;
    price_change_percentage_200d: number;
    price_change_percentage_200d_in_currency: Currencies<number>;
    roi: NumberOrNull;
    total_supply: number;
    total_value_locked: NumberOrNull;
    total_volume: any;
}

interface SelectedCoin {
    additional_notices: any[];
    asset_platform_id: StringOrNull;
    block_time_in_minutes: number;
    categories: string[];
    coingecko_rank: number;
    coingecko_score: number;
    community_data: CommunityData;
    community_score: number;
    country_origin: string;
    description: { en: string };
    developer_data: DeveloperData;
    developer_score: number;
    genesis_date: string;
    hashing_algorithm: string;
    id: string;
    image: { thumb: string, small: string, large: string };
    last_updated: string;
    links: Links;
    liquidity_score: number;
    market_cap_rank: number;
    market_data: MarketData;
    name: string;
    platforms: { [key: string]: string };
    public_interest_score: number;
    public_interest_stats: { alexa_rank: NumberOrNull, bing_matches: NumberOrNull };
    public_notice: any;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    status_updates: any[];
    symbol: string;
    tickers: TickerData[];
}

interface TrendingCoin {
    item: {
        id: string;
        coin_id: number;
        name: string;
        symbol: string;
        market_cap_rank: 16;
        thumb: string;
        small: string;
        large: string;
        slug: string;
        price_btc: number;
        score: number;
    }
}

interface TrendingCoins {
    coins: TrendingCoin[];
    exchanges: any[];
}
