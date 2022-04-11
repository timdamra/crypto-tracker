import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { api } from './api';
import { CoinListView } from './components/CoinListView';
import { SelectedCoin } from './components/SelectedCoin';
import { Trending } from './components/Trending';
import { 
  useAppContext,
  setCoinList,
  setError,
  setIsLoading 
} from './state';

import './App.css';

export const App: React.FC = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const getCoins = async () => {
      try {
        dispatch(setIsLoading(true));
        const rawData = await api.getCoinList();
        const response = await rawData.json();

        if (response) {
          dispatch(setCoinList(response));
        }
      } catch (e: any) {
        dispatch(setError(e));
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    if (state.coinList.length < 1) {
      getCoins();
    }

    return () => {
      console.log("FROM CLEANUP FUNCTION")
    }
  }, [dispatch, state.coinList.length]);

  if (state.isLoading) {
    return <div>Loading, please wait...</div>
  }

  if (state.error) {
    return (
      <div style={{ color: 'red' }}>
        Oh no, something went wrong!
      </div>
    )
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mb-5">
      <h2 className='title-font'>Crypto Tracker</h2>
      <p className='subtitle'>Powered by CoinGecko</p>
      <Routes>
        <Route path='/' element={<CoinListView coinList={state.coinList} />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/coin/:id' element={<SelectedCoin />} />
        <Route
          path='/*' 
          element={(
            <div>
              Page Not Found
            </div>
          )} 
        />
      </Routes>
    </div>
  );
}
