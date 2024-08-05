import { useState, useEffect } from "react";
import axios from "axios"; // Import the Axios library

const API_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
const API_KEY = 'b663cf254476ab2b4a524ab4439841f180d31833800495d1fa213266e74106bd';

export const fetchData = async (coins, currency) => {
    try {
      const coinsParam = coins.toString();
      const currencyParam = currency.toString();

      const response = await fetch(`${API_URL}?fsyms=${coinsParam}&tsyms=${currencyParam}&api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      let data = [];

      coins.forEach(coin => {
        const currentPrice = result.RAW[coin][currency[0]].PRICE;
        const openingPrice = result.RAW[coin][currency[0]].OPENHOUR;
        const increase = ((openingPrice - currentPrice) / openingPrice) * 100;

        const coinData = {
          'name' : coin,
          'currentPrice' : currentPrice,
          'openingPrice' : openingPrice,
          'increasePrc' : increase
        }

        data.push(coinData)
      });
      return data;

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  };