import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from './services/fetchCryptoApi';
import DataTable from './components/DataTable';

const COINS = [
  'BTC',
  'ETH',
  'LTC',
  'SOL',
  'USDC',
  'XRP',
  'PEPE',
  'DOGE',
  'BNB',
  'WIF',
  'FDUSD'
];

const CURRENCIES = [
  'USD',
  'EUR'
]

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(COINS, CURRENCIES);
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 style={{"paddingTop":"100px", "paddingBottom":"100px", "margin": "0"}}>Data:</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
