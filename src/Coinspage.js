import {React,useState} from 'react'
import { useQuery } from"@tanstack/react-query";
import Axios from 'axios';
import Coin from "./coin";
import CoinInfo from "./CoinInfo";
import {Link } from "react-router-dom";






export const Coinspage = () => { 
  const [listofcoin, setlistofcoin] = useState([]);
  const [searchword, setsearchword] = useState("");

  const {data} = useQuery(["coin"], () => {
    
    return  Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&")
    .then((res) => res.data);
  });

  const coins = listofcoin.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchword.toLowerCase())
  }) 


  const searchdisplay = (event)=>{setsearchword(event.target.value)}
    return (
        
    <>
    <div className="cryptoHeader">
      <input type="text" placeholder='bitcoin...' onChange={searchdisplay}/>
    </div>
    <div className="cryptoDisplay">
      {data?.coins.map((coin)=>{
        return (
          <Link to={`./CoinInfo.js/${coin.id}`}  element={<CoinInfo />}>
          <Coin
            name={coin.name} 
            icon={coin.icon} 
            price={coin.price} 
            symbol={coin.symbol}     
    />
</Link>
        )

        })}
        </div>
    </>
    
    )
  
  
}





























      {/* <div className="cryptoHeader">
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
  </div> */}















//   return (
        
//     <>
//       <h1>this is Coinspage</h1>
//       <p>{data?.coins[1].name}</p>
//     </>
    
//     )
  
  
// }