import React from 'react';
import './App.css';
import {Coinspage} from "./Coinspage";
import Coin from "./coin";
import CoinInfo from "./CoinInfo";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from"@tanstack/react-query";





function App() {
const client = new QueryClient({})


  return (
    <div className="App">
    <Router>
        <QueryClientProvider client={client}>
      
          <Routes>
            <Route path='/' element={<Coinspage />}/>
            <Route path='/CoinInfo.js' element={<CoinInfo/>}>
            <Route path='/CoinInfo.js/:coinId' element={<CoinInfo/>}/>
            </Route>

          </Routes>
      
          </QueryClientProvider>
    </Router>
    </div>
  );
}

export default App;


// 3 : 42
