import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_8e45a") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          // autosize: false,
          width: "100%",
          symbol: "COINBASE:BTCUSD",
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
          watchlist: [
            "BINANCE:BTCUSD",
            "BINANCE:POLYXBTC",
            "BINANCEUS:POLYXUSD",
          ],
          details: true,
          hotlist: true,
          calendar: true,
          studies: ["Volume@tv-basicstudies"],
          container_id: "tradingview_8e45a",
        });
      }
    }
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <div id='tradingview_8e45a' />
      <div className='tradingview-widget-copyright'>
        <a
          href='https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP'
          rel='noopener'
          // target='_blank'
        >
          <span className='blue-text'>Technical chart </span>
        </a>
        by TradingView
      </div>
    </div>
  );
}
