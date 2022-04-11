import { Coin } from './Coin';
import { ButtonsGroup } from './ButtonsGroup';

interface CoinListViewProps {
    coinList: CoinList;
}

const Buttons = [
  { 
    text: "Trending Coins",
    classNames: "button is-link is-outlined mb-5",
    link: "/trending"
  }
]

export const CoinListView: React.FC<CoinListViewProps> = ({ coinList }) => {
    return (
        <>
          <ButtonsGroup buttons={Buttons} />
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
