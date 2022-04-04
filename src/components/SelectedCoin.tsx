import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../api';
import { formatBigNumber } from '../utils/numbers';

import './SelectedCoin.css';

export const SelectedCoin: React.FC = () => {
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const [selectedCoin, setSelectedCoin] = useState<SelectedCoin | null>(null);

    const params = useParams();
    const idFromParams = params.id;

    const getCoin = async () => {
        try {
            const rawData = await api.getCoin(idFromParams!);
            const response = await rawData.json();
    
            if (response) {
                setSelectedCoin(response);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const fetchCoin = useCallback(getCoin, [idFromParams]);

    useEffect(() => {
        fetchCoin();
    }, [fetchCoin]);

    useEffect(() => {
        if (descriptionRef && selectedCoin) {
            descriptionRef.current!.innerHTML = selectedCoin.description.en; 
        }
    }, [descriptionRef, selectedCoin]);

    const priceClassName = selectedCoin && selectedCoin.market_data.price_change_percentage_24h >= 0 ?
      "has-text-success" :
      "has-text-danger"

    return (
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mb-5 selectedcoin">
            <Link style={{ fontSize: "18px", marginBottom: "12px" }} to="/">Back to Homepage</Link>
            {selectedCoin && (
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center box">
                    <div className='is-flex is-flex-direction-row is-justify-content-center is-align-items-center'>
                        <img src={selectedCoin.image.large} alt="coin" />
                        <span className='selectedcoin__symbol'>{selectedCoin.symbol.toUpperCase()}</span>
                        <span className={priceClassName} style={{ marginLeft: "20px" }}>
                            {`${selectedCoin.market_data.price_change_percentage_24h}%`}
                        </span>
                    </div>
                    <div
                      className='is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-between mt-4 pt-4' 
                      style={{ width: "100%", borderTop: "solid" }}
                    >
                        <div className='description'>
                            <h3>Description</h3>
                            <p ref={descriptionRef}></p>
                        </div>
                        <div className='stats'>
                            <h3>Stats</h3>

                            {/* TOKENOMICS */}
                            <h4>Tokenomics</h4>
                            <p>Current Price: ${selectedCoin.market_data.current_price.usd}</p>
                            <p>Market Cap: ${formatBigNumber(selectedCoin.market_data.market_cap.usd)}</p>
                            <p>All Time High: ${selectedCoin.market_data.ath.usd}</p>
                            <p>All Time Low: ${selectedCoin.market_data.atl.usd}</p>
                            <p>Circulating Supply: {formatBigNumber(selectedCoin.market_data.circulating_supply)}</p>
                            <p>Total Supply: {formatBigNumber(selectedCoin.market_data.total_supply)}</p>
                            <p>
                                Max Supply: {selectedCoin.market_data.max_supply ? formatBigNumber(selectedCoin.market_data.max_supply) : "NA"}
                            </p>

                            {/* COMMUNITY */}
                            <h4>Community</h4>
                            <p>Twitter followers: {selectedCoin.community_data.twitter_followers}</p>
                            <p>Reddit subscribers: {selectedCoin.community_data.reddit_subscribers}</p>
                            <a href={selectedCoin.links.homepage[0]} target='_blank' rel="noreferrer">Website</a><br />
                            <a href={selectedCoin.links.blockchain_site[0]} target='_blank' rel="noreferrer">View Blockchain Info</a><br />
                            <a href={selectedCoin.links.subreddit_url} target='_blank' rel="noreferrer">Subreddit</a>

                            {/* DEVELOPERS */}
                            <h4>Developer Data</h4>
                            {selectedCoin.links.repos_url.github.length > 0 && 
                              selectedCoin.links.repos_url.github.map((repo: string, idx) => {
                                return (
                                    <div key={repo}>
                                        <a href={repo} target="_blank" rel="noreferrer">{`Repo ${idx + 1}`}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
