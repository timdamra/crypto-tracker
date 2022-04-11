import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../api'; 

export const Trending: React.FC = () => {
  const [trendingList, setTrendingList] = useState<TrendingCoin[] | null>(null);

  useEffect(() => {
    const getCoins = async () => {
        try {
          const rawData = await api.getTrendingCoins();
          const response = await rawData.json();
          
          if (response) {
            setTrendingList(response.coins);
          }
        } catch (err: any) {
            console.error(err);
        }
    }

    if (!trendingList) {
        getCoins();
    }
  }, [trendingList]);

  return trendingList && trendingList.length > 0 ?(
    <>
        <Link style={{ fontSize: "18px", marginBottom: "12px" }} to="/">Back to Homepage</Link>
        {trendingList.map((coin: TrendingCoin, idx) => {
            return (
                <Link to={`/coin/${coin.item.id}`} key={`${coin.item.name}-${idx}`} className="box coin-width trending">
                    <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                        <h3>{coin.item.name}</h3>
                        <img 
                          src={coin.item.large} 
                          style={{ width: "32px", height: "32px", marginLeft: "8px" }} 
                          alt={`trending coin ${coin.item.name}`} 
                        />
                    </div>
                </Link>
            )
        })}
    </>
  ) : (
      <h3>Waiting for response...</h3>
  );
}
