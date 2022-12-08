import {React,useState} from 'react'
import { useQuery } from"@tanstack/react-query";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function CoinInfo() {

const {coinId} = useParams()
//   const {data} = useQuery(["coin"], () => {
    
//     return  Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&`)
//     .then((res) => console.log(res.data) );
//   });


  return (
    <div>
      <h1>this is {coinId}</h1>
      </div>
  )
}

export default CoinInfo