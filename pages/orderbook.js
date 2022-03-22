import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  const [quotes, setQuotes] = useState({})
  const getQuotes = async () => {
    const quotesRes = await fetch(
      "https://serum-api.bonfida.com/orderbooks/BTCUSDT"
    )
    const quotesData = await quotesRes.json()
    setQuotes(quotesData.data)
  }

  useEffect(getQuotes, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900">NFT Dex</h1>
      <div className="">
        <p>The following is the market of BTC/USDT</p>
      </div>
      {Object.keys(quotes).length ? (
        <div>
          <p>Bids</p>
          {quotes.bids.map((bid) => (
            <p key={bid.price}>{bid.price}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
