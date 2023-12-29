import React, { useState, useEffect } from 'react';
import '../styles/WalletBottomComp.css';
// import { NavLink } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.webp';
// import binance from '../assets/binance.png';
// import ethereum from '../assets/ethereum.png';

const BottomComp = () => {
  const [wallets, setWallets] = useState([]);
  const getWallets = async () => {
    try {
      const resp = await fetch(`https://api.blockcypher.com/v1/btc/main/wallets?token=${process.env.REACT_APP_TOKEN}`)
      const data = await resp.json();
      // console.log(data);
      setWallets(data.wallet_names);
    } catch (error) {
      alert("Something went wrong")
      alert(error)
    }

  }
  useEffect(() => {
    getWallets()
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
                  <th>Holding</th>
                  <th>Actions</th>
                  {/* <th>Price</th>
                  <th>Transaction</th> */}
                </tr>
              </thead>
              <tbody>
                {wallets.map((wallet, index) => {
                  return <Wallets key={index} wallet={wallet} />


                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomComp;


function Wallets({ wallet }) {
  const [balance, setBalance] = useState('');
  const [addresses, setAddresses] = useState('');
  const getAddresses = async () => {
    try {
      const resp = await fetch(`https://api.blockcypher.com/v1/btc/main/wallets/${wallet}/addresses?token=${process.env.REACT_APP_TOKEN}`)
      const data = await resp.json();
      setAddresses(data.addresses[0]);
    } catch (error) {
      console.log(error);
      alert("Something went wrong")
    }
  }
  const getBalance = async () => {
    try {
      const resp = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${addresses}/balance?token=${process.env.REACT_APP_TOKEN}`)
      const data = await resp.json();
      console.log(data);
      setBalance(data.final_balance);
    } catch (error) {
      alert("Something went wrong")
      console.log(error);
    }

  }
  useEffect(() => {
    getAddresses()
    if (addresses) {
      getBalance()

    }
    // getBalance()
  }, [wallet]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>

      <tr>
        <td>
          <div className="coin">
            <div className="image">
              <img src={bitcoin} alt="bitcoin_img" />
            </div>
            <div className="text">
              <p>{wallet}</p>
            </div>
          </div>
        </td>
        <td>{balance}</td>
        <td>
          <div>
            <a href="/#">
              <i className='bi bi-trash'></i>
            </a>
          </div>
        </td>
      </tr>
    </>
  )
}