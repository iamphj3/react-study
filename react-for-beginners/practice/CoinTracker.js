import { useEffect, useState } from "react";

function CoinTracker(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); // 비어있는 array -> undefined가 되지 않게 함
    const [money, setMoney] = useState([]);
    const onChange = (event) => {
        setMoney(event.target.value)
    }
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
            <h3>USD</h3>
            <input
                // 인풋 받기
                onChange={onChange}
                value={money}
                type="number"
                placeholder="write your USD"
            /> 
            <h3>COIN</h3>
            {loading ? (
                <strong>Loading...</strong>
                ) : (
                    // 변환할 종류 고르기
                    // 결과 보여주기
                    <select>
                        {coins.map((coin, index) => (<option key={index}>{coin.name} 
                        ({coin.symbol}) : {money/coin.quotes.USD.price} 
                        </option>))}
                    </select>
            )}
        </div>
    );
}

export default CoinTracker;