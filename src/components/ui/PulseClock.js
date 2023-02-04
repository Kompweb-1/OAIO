import React from "react";
import "../../style/pulseClock.css";
// import moment from "moment";
// import { CRYPTO_COMPARE } from "../utils/keys";
import {
  //   TradingViewEmbed,
  MiniChart,
  // AdvancedChart,
  // TickerTape,
  TechnicalAnalysis,
  // CryptocurrencyMarket,
  // TradingView,
  // Ticker,
  CompanyProfile,
} from "react-tradingview-embed";

// var formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",

class Dashboard extends React.Component {
  //   constructor(props) {
  // super(props);
  //   }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BINANCE:BTC",
    leaderboard: [],
    addressData: "",
    symbol: "",
    // price: "USD",
  };

  componentDidMount() {
    this.loadChartData();
  }

  loadChartData = async () => {
    // const response = await fetch(
    //   `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
    // );
    // const data = await response.json();
    // const bulkData = data.Data.Data;
    const dataArray = [];
    // {
    //this needs to be updated to time, active_addresses, average_transaction_value, current_supply, new_addresses,
    // symbol, transaction_count, transaction_count_all_time

    // bulkData.map((y) =>
    //   dataArray.push({
    //     time: y.time,
    //     active_addresses: y.active_addresses,
    //     average_transaction_value: y.average_transaction_value,
    //     current_supply: y.current_supply,
    //     symbol: y.symbol,
    //     transaction_count: y.transaction_count,
    //     transaction_count_all_time: y.transaction_count_all_time,
    //   })
    // );

    // bulkData.map((y) =>
    //   dataArray.push({
    //     x: y.time * 1000,
    //     y: y.transaction_count * y.average_transaction_value,
    //   })
    // );

    // }
    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };

  render() {
    // const { chartData, query, addressData, symbol } = this.state;
    const { query } = this.state;

    return (
      <div>
        {/* <div className='inputDiv'></div> */}
        {/* <TradingViewWidget
          symbol='NASDAQ:AAPL'
          theme={Themes.DARK}
          locale='EN'
          autosize
          height='480'
        /> */}

        <div className='charty'>
          {/* {query.length > 2 ? ( */}
          <TechnicalAnalysis
            widgetPropsAny={{
              // interval: "1D",
              // theme: "dark",
              isTransparent: true,
              autosize: true,
              // width: "100%",
              width: 371,
              symbol: query + "USD",
            }}
          />
          {/* ) : (
            "BTC"
          )} */}
        </div>

        {/* {query.length > 2 ? (
            <AdvancedChart
              widgetProps={{
                interval: "1m",
                colorTheme: "dark",
                width: "100%",
                height: 480,
                symbol: query + "USD",
                studies: [
                  "MACD@tv-basicstudies",
                  "StochasticRSI@tv-basicstudies",
                  "TripleEMA@tv-basicstudies",
                ],
              }}
            />
          ) : (
            "BTC"
          )} */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}> */}
        {/* {chartData.map((x) => ( */}
        {/* ))} */}

        {/* </div> */}

        <div className='achart'>
          <MiniChart
            widgetPropsAny={{
              isTransparent: true,
              interval: "1D",
              // width: "100%",
              width: 362,
              // height: 80,
              symbol: query + "USD",
            }}
            // key={x.x}
            // time={x.x}
            // symbol={x.key}
            // active_addresses={x.y}
            // average_transaction_value={x.average_transaction_value}
            // current_supply={x.current_supply}
            // transaction_count={x.transaction_count}
            // transaction_count_all_time={x.transaction_count_all_time}
          />
          {/* {query.length > 2 ? ( */}
          {/* <AdvancedChart
            widgetPropsAny={{
              // width: "100%",
              // symbol: "COINBASE:BTCUSD",
              interval: "60",
              timezone: "Etc/UTC",
              theme: "dark",
              style: "1",
              locale: "en",
              toolbar_bg: "#f1f3f6",
              enable_publishing: false,
              withdateranges: true,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              details: true,
              watchlist: [
                "BINANCE:BTCUSD",
                "BINANCE:POLYXBTC",
                "BINANCEUS:POLYXUSD",
              ],
              hotlist: true,
              calendar: true,
              // width: "100%",
              // height: 480,
              symbol: query + "USD",
            }}
          /> */}

          {/* <TickerTape
            widgetPropsAny={{
              // showSymbolLogo: true,
              isTransparent: true,
              // height: "100%",
              // width: "96%",
              // displayMode: "adaptive",
              // colorTheme: "dark",
              // autosize: true,
              symbol: [
                {
                  proName: "COINBASE:POLYUSD",
                  title: "POLY/USD",
                  price: "USD",
                },
                {
                  proName: "BINANCE:BTCUSD",
                  title: "BTC/USD",
                  price: "USD",
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT",
                  price: "USD",
                },
                {
                  proName: "BINANCE:POLYXUSD",
                  title: "POLYX/USD",
                  price: "USD",
                },
                {
                  proName: "BINANCE:ETHUSD",
                  title: "ETH/USD",
                  price: "USD",
                },
                {
                  proName: "BINANCE:POLYXBTC",
                  title: "UNI/USDT",
                  price: "BTC",
                },
              ],
            }}
          /> */}
        </div>

        {/* ) : (
             "BTC"
          )} */}

        {/* <Ticker
          widgetProps={{
            isTransparent: true,
            // symbol: [
            //   "COINBASE:POLYUSD",
            //   "BINANCE:BTCUSD",
            //   "BINANCE:BNBUSDT",
            //   "BINANCE:POLYXUSD",
            //   "COINBASE:ETHUSD",
            //   "BINANCE:POLYXBTC",
            // ],
          }}
        /> */}
        <div className='barRequest'>
          <input
            placeholder='Search for a symbol'
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
            className='dataRequest'
          />
        </div>
        {/* <button
          style={{ marginTop: 40, marginBottom: 40 }}
          onClick={this.loadChartData}
          className='btnRequest'>
          Refresh
        </button> */}
        <div className='cchart'>
          <CompanyProfile
            widgetPropsAny={{
              isTransparent: true,
              height: "auto",
              width: 375,
              symbol: query + "USD",
            }}
          />
        </div>

        {/* <CryptocurrencyMarket
          widgetProps={{
            isTransparent: true,
            // symbol: "BINANCE:BTCUSD",
            // interval='1'
            // width: "100%",
            // height: "480",
            timezone: "Etc/UTC",
            // symbol: query + "USD",
            // theme={Themes.DARK}
            locale: "en",
            // autosize: true,
          }}
        /> */}
      </div>
    );
  }
}

// const Chart = (props) => {
//   return (
// <div>

/* <div className='chart'>
        <p className='chart-data' key={props.time}>
          {"time" + props.time}
        </p>
        <p className='chart-data' key={props.active_addresses}>
          {"active addresses" + props.active_addresses}
        </p>
        <p className='chart-data'>{moment(props.time * 1000).format("L")}</p>
        <p className='chart-data'>
          {"Average Transaction " + props.average_transaction_value}
        </p>
        <p className='chart-data'>
          {"Active Addresses " + props.active_addresses}
        </p>
        <p className='chart-data'>{"Current Supply " + props.current_supply}</p>
        <p className='chart-data'>
          {"Transaction Count " + props.transaction_count}
        </p>
        <p className='chart-data'>
          {"Transaction Count All Time " + props.transaction_count_all_time}
        </p>
      </div> */

/* </div> */

//   );
// };

// const Leader = (props) => {
//   return (
//     <div className='leaderItem'>
//       <a href={props.url} target='#'>
//         <img src={props.logo} alt={props.symbol} className='logo' />
//       </a>
//       <p className='leaderText'>{props.symbol}</p>
//       <p className='leaderText'>{props.price}</p>
//     </div>
//   );
// };

// const HoverHint = ({ active, data, query, symbol }) => (
//   <div className={`nonActive ${active ? "active" : ""}`}>
//     <p className='hoverData'>
//       {data.length > 1
//         ? query
//         : symbol.toUpperCase() +
//           "  - Raw Averaged Volume (Transactions * Average Value $USD)"}
//     </p>
//     <p className='hoverData'>
//       {data.length < 1 ? "" : data.time + " - " + formatter.format(data.price)}{" "}
//     </p>
//     {/* <p className="hoverData">{data.length > 1 ? "Number of Addresses" + data.price : data.price}</p> */}
//   </div>
// );

export default Dashboard;
