import { useState } from "react";
import "./CurrencyConverter.css"

function CurrencyConverter(props){
    const [amountCurrency1, setAmountCurrency1] = useState(1.0000);
    const [amountCurrency2, setAmountCurrency2] = useState(1.0000);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('USD');

    function handleChangeAmountCurrency1(val){
        setAmountCurrency1(val);
        let cur1 = props.rates.find(rate => rate.cc === document.getElementById('currency1').value); 
        let cur2= props.rates.find(rate => rate.cc === document.getElementById('currency2').value); 
        setAmountCurrency2((val * cur1.rate / cur2.rate).toFixed(4));
    }

    function handleChangeAmountCurrency2(val){
        setAmountCurrency2(val);
        let cur1 = props.rates.find(rate => rate.cc === document.getElementById('currency1').value); 
        let cur2= props.rates.find(rate => rate.cc === document.getElementById('currency2').value); 
        setAmountCurrency1((val * cur2.rate / cur1.rate).toFixed(4));
    }

    function handleChangeCurrency1(value){
        let cur1 = props.rates.find(rate => rate.cc === value); 
        let cur2= props.rates.find(rate => rate.cc === document.getElementById('currency2').value); 
        setCurrency1(cur1.cc);
        if(cur1.cc === cur2.cc){
            setAmountCurrency1(amountCurrency1);
            setAmountCurrency2(amountCurrency1);
        }else{
            setAmountCurrency2((amountCurrency1 * cur1.rate / cur2.rate).toFixed(4)); 
        }
    }

    function handleChangeCurrency2(value){
        let cur1 = props.rates.find(rate => rate.cc === document.getElementById('currency1').value); 
        let cur2 = props.rates.find(rate => rate.cc === value); 
        setCurrency2(cur2.cc);
        if(cur1.cc === cur2.cc){
            setAmountCurrency1(amountCurrency2);
            setAmountCurrency2(amountCurrency2);
        }else{
            setAmountCurrency1((amountCurrency2 * cur2.rate / cur1.rate).toFixed(4)); 
        }
    }

    return (<div className="converter-wrapper">
    <div className="converter">
       <h1>Currency converter</h1> 
       <div className="converter-filelds">
            <div className="converter-fileld">
                <input min="0" type="number" value={amountCurrency1} onChange={e=>handleChangeAmountCurrency1(e.target.value)}/>
                <select id="currency1" value={currency1} onChange={e=>handleChangeCurrency1(e.target.value)}>
                    {
                        props.rates.map(currency=>(
                            <option value={currency.cc} key={currency.r030}>{currency.cc}</option>
                        ))
                    }
                </select>
            </div>
            <div className="converter-fileld">
                <input min="0" type="number" value={amountCurrency2} onChange={e=>handleChangeAmountCurrency2(e.target.value)}/>
                <select id="currency2" value={currency2} onChange={e=>handleChangeCurrency2(e.target.value)}>
                    {
                        props.rates.map(currency=>(
                            <option value={currency.cc} key={currency.r030}>{currency.cc}</option>
                        ))
                    }
                </select>
            </div>
       </div>
    </div>
    </div>);
}

export default CurrencyConverter;