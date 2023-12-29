import React, { useEffect, useState } from 'react';
import '../styles/LastTranasactionBottomComp.css'
import bitcoin from '../assets/bitcoin.webp';


const LastTransactionBottomComp = () => {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    const MY_ADDRESS = '1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e'
    const resp = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${MY_ADDRESS}/full`)
    const data = await resp.json();
    setTransactions(data.txs);
  }


  useEffect(() => {
    getTransactions()
  }, []);
  return (
    <>
      <div className="bottomComp">
        <div className="upper_div">
        </div>
        <div className="lower_div">
          <div className="table_section">
            <table>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Wallet</th>
                  <th>Amount</th>
                  <th>Result</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => {
                  return (

                    <tr key={transaction.block_hash}>
                      <td>
                        <div className="coin">
                          <div className="image">
                            <img src={bitcoin} alt="bitcoin_img" />
                          </div>
                          <div className="text">
                            <p>Bitcoin</p>
                          </div>
                        </div>
                      </td>
                      <td>BTC0.00256</td> {/* {transaction.addresses[0]}  i was not able get api end point to get particular ...*/}
                      <td>{transaction.total}</td>
                      <td>
                        <div className="transaction">
                          <div
                            
                            className="transaction_btn"
                          >
                            <i className="bi bi-arrow-down-left"></i>
                            <p>Receive</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="transaction_btn">
                          {/* <i className="bi bi-arrow-up-right"></i> */}
                          <p>SUCCESS</p>
                        </div>

                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastTransactionBottomComp;
