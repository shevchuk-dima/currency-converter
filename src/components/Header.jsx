import './Header.css'

function Header(props){
    return (<div className="App-header">
       <h1>Actual rate per UAH</h1> 
       <div>
            <div>USD: {props.usd}</div>
            <div>EUR: {props.eur}</div>
        </div>  
    </div>);
}

export default Header;