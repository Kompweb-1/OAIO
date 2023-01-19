import React from "react";
import "../../style/pulse.css";

import { TechnicalAnalysis, MiniChart } from "react-tradingview-embed";
// import { TechnicalAnalysis } from "react-tradingview-widget";

class App extends React.Component {
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
    const dataArray = [];

    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        {/* <div> */}
        <div className='charty'>
          <TechnicalAnalysis
            widgetProps={{
              isTransparent: true,
              width: 360,
              //   height: 400,
              symbol: query + "USD",
            }}
          />
        </div>
        <div className='barRequest'>
          <MiniChart
            widgetPropsAny={{
              isTransparent: true,
              //   interval: "1D",
              //   width: 340,
              height: 82,
              symbol: query + "USD",
            }}
          />
          <input
            placeholder='Search for a symbol'
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
            className='dataRequest'
          />
        </div>
        {/* <button
          //   style={{ marginBottom: 200 }}
          onClick={this.loadChartData}
          className='btnRequest'>
          Refresh
        </button> */}
      </>
    );
  }
}

export default App;
