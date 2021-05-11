import React from 'react'
import styled from 'styled-components'

const CoinContainer = styled.div`

display:flex;
justify-content:center;
`

const CoinRow = styled.div`
display:flex;
flex-direction:row;
justify-items:start;
align-items:center;
height:80px;
width: 900px;
border-bottom: 3px solid #d7d7d7;
`

const CoinDetails = styled.div`
display:flex;
align-items:center;
padding-right: 24px;
min-width: 300px;
`

const CoinImg = styled.img`
height:30px;
width:30px;
margin-right:10px;
`

const CoinHeading = styled.h1`
font-size: 16px;
width: 150px;
`

const CoinSymbol = styled.p`
text-transform: uppercase;
`

const CoinData = styled.div`
display:flex;
text-align: center;
justify-content:space-between;
width:100%;
`

const CoinPrice = styled.p`
width: 150px;

`

const CoinVolume = styled.p`
width:200px;

`

const CoinPercentRed = styled.p`
width:80px;
color: #f00606;
`
const CoinPercentGreen = styled.p`
width:80px;

color: #11d811;

`


const CoinMarketCap = styled.p`
width: 240px;

`


const Coin = ({ image, name, symbol, price, volume, priceChange, marketCap }) => {
    return (
        <CoinContainer>
            <CoinRow>
                <CoinDetails>
                    <CoinImg
                        src={image}
                        alt="crypto"
                    />
                    <CoinHeading>{name}</CoinHeading>
                    <CoinSymbol>{symbol}</CoinSymbol>

                </CoinDetails>
                <CoinData>
                    <CoinPrice>Price: £{price.toLocaleString()}</CoinPrice>
                    <CoinVolume>Volume: £{volume.toLocaleString()}</CoinVolume>

                    {priceChange < 0 ? (
                        <CoinPercentRed >{priceChange.toFixed(2)}%</CoinPercentRed>
                    )
                        : <CoinPercentGreen>{priceChange.toFixed(2)}%</CoinPercentGreen>
                    }

                    <CoinMarketCap>
                        Mkt Cap: £{marketCap.toLocaleString()}
                    </CoinMarketCap>

                </CoinData>
            </CoinRow>
        </CoinContainer>
    )
}

export default Coin


