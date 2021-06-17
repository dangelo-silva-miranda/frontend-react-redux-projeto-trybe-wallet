import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    // const test = [
    //   "USD": {
    //     "code": "USD",
    //     "codein": "BRL",
    //     "name": "Dólar Americano/Real Brasileiro",
    //     "high": "5.0453",
    //     "low": "5.0453",
    //     "varBid": "0.0016",
    //     "pctChange": "0.03",
    //     "bid": "5.0437",
    //     "ask": "5.0469",
    //     "timestamp": "1623790799",
    //     "create_date": "2021-06-15 18:00:08"
    //   },
    //   "USDT": {
    //     "code": "USD",
    //     "codein": "BRLT",
    //     "name": "Dólar Americano/Real Brasileiro Turismo",
    //     "high": "5.455",
    //     "low": "5.455",
    //     "varBid": "0",
    //     "pctChange": "0",
    //     "bid": "5.29",
    //     "ask": "5.62",
    //     "timestamp": "1623790802",
    //     "create_date": "2021-06-15 21:00:04"
    //   }
    // ];
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default Wallet;
