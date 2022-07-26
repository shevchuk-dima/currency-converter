import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [rateUSD, setAmountUSD] = useState();
  const [rateEUR, setAmountEUR] = useState();
  const [rates, setRates] = useState([{}]);

  useEffect(() =>{
    axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response =>{
        let usd = response.data.find(rate => rate.cc === 'USD');
        let eur = response.data.find(rate => rate.cc === 'EUR'); 
        let uah = {"r030":980,"txt":"Українська гривня","rate":1,"cc":"UAH"};
        let rates = [usd, eur, uah]
        setRates(rates) 
        setAmountUSD(usd.rate);
        setAmountEUR(eur.rate);
      })
    }, []);


  return (

    <div className="App">
      <Header usd={rateUSD} eur={rateEUR}/>
      <CurrencyConverter rates={rates}/>
    </div>
  );
}

export default App;
