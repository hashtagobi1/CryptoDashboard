import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Coin from './Coin';

const CoinApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 64px;
color: white;
`

const CoinSearch = styled.div`
margin-bottom:64px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const HeadingOne = styled.h1`
margin-bottom: 32px;
text-align: center;

`

const Form = styled.form`

`

const CoinInput = styled.input`
color:#e2e2e2;
padding-left:16px;
width: 300px;
height: 50px;
border-radius: 4px;
border:none;
background-image:   linear-gradient(to right,#8e8bca,#6f966f);

::placeholder{
  color:#e2e2e2;

}
`



function App() {
  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {


    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        // console.log(res.data)
        // console.log(res.status)
        // console.log(res.type)
        // console.log("hey")
      }).catch(err => alert('Oopsie'))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <CoinApp>
      <CoinSearch>
        <HeadingOne>Crypto Dashboard</HeadingOne>
        <Form>
          <CoinInput
            placeholder="Search..."
            type="text"
            onChange={handleChange}
          />
        </Form>
      </CoinSearch>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}

          />
        )
      })}




    </CoinApp>
  );
}

export default App;
