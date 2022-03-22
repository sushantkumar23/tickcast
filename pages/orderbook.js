import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
    
    const [quotes, setQuotes] = useState({})
    const getQuotes = async () => {
        const quotesRes = await fetch('https://serum-api.bonfida.com/orderbooks/BTCUSDT')
        const quotesData = await quotesRes.json()
        setQuotes(quotesData.data)
    }

    useEffect(getQuotes, [])
    
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-900 font-bold text-3xl">NFT Dex</h1>
            <div className="">
                <p>The following is the market of BTC/USDT</p>
            </div>
            { Object.keys(quotes).length ? (
                <div>
                    <p>Bids</p>     
                    { quotes.bids.map((bid) => (
                        <p>{bid.price}</p>
                    
                    ))}
                </div>
            ) : null}
        </div>
    )
}
