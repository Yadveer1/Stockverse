import {useEffect, useState } from 'react';
import axios from 'axios';


function Holdings () {

  const [AllHoldings, setAllHoldings] = useState([]);
  const [TotalValues, setTotalValues] = useState({ Avg: 0, Cur: 0, PL: 0 });

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    })
    axios.get("http://localhost:3002/holdingsSummary").then((res) => {
      console.log(res.data);
      setTotalValues(res.data);
    })

  }, [])



  return (
    <>
      <h3 className="title">Holdings ({AllHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {AllHoldings.map((stock,index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue-stock.avg*stock.qty>=0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return(
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {TotalValues.Avg.toFixed(2)}{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {TotalValues.Cur.toFixed(2)}{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{TotalValues.PL}</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
