import { useEffect, useState } from "react";

function CoinTracker(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); // 비어있는 array -> undefined가 되지 않게 함
    
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, [])
    return (
        <div>  
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
                ) : (
                    <select>
                        {coins.map((coin) => (
                            <option>
                                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
            )}
        </div>
    );
}

export default CoinTracker;