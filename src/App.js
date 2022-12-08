import Axios from 'axios';
import React,{useEffect,useState} from 'react';
import './App.css';
import Coins from './components/Coins';
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";





function App() {
  const [listofcoin, setlistofcoin] = useState([]);
  const [searchword, setsearchword] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&")
    .then((response)=>{
      console.log(response.data.coins);
      setlistofcoin(response.data.coins)
    })
    
  },[]);

const filteredcoins = listofcoin.filter((coin)=>{
  return coin.name.toLowerCase().includes(searchword.toLowerCase())
}) 

const searchdisplay = (event)=>{setsearchword(event.target.value)}

  return (
    <div className="App">
    <div className="cryptoHeader">
      <input type="text" placeholder='bitcoin...' onChange={searchdisplay}/>
    </div>
    <div className="cryptoDisplay">
      {filteredcoins.map((coin)=>{
        return <Coins
         name={coin.name} 
         icon={coin.icon} 
         price={coin.price} 
         symbol={coin.symbol} 
         
          />
        })}
        </div>
    </div>
  );
}

export default App;

