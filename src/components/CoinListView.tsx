import { Coin } from './Coin';

interface CoinListViewProps {
    coinList: CoinList;
}

export const CoinListView: React.FC<CoinListViewProps> = ({ coinList }) => {
    return (
        <>
          {coinList.map((coin: Coin) => {
            return (
              <Coin
                coin={coin} 
                key={coin.id} 
              />
            )
          })}
        </>
    )
}
