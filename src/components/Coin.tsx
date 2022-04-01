import { useNavigate } from "react-router-dom";

interface CoinProps {
    coin: Coin;
}

export const Coin: React.FC<CoinProps> = ({ coin }) => {
    const navigate = useNavigate();
    const priceClassName = coin.price_change_percentage_24h >= 0 ?
      "has-text-success" :
      "has-text-danger"

    const handleClick = () => {
        navigate(`/coin/${coin.id}`)
    }

    return (
        <div className="box coin-width" onClick={handleClick}>
            <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
              <div className="is-flex is-flex-direction-row">
                  <div className="mr-2">
                      <img src={coin.image} style={{ width: "32px", height: "32px" }} />
                  </div>
                  <div>
                    <p>{coin.symbol.toUpperCase()}</p>
                    <p className="is-size-7">{coin.name}</p>
                  </div>
              </div>
              <div className={`${priceClassName} has-text-weight-bold`}>{`$${coin.current_price}`}</div>
            </div>
        </div>
    )
}
