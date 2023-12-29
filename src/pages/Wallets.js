import React from 'react';
import TopComp from '../components/WalletTopComp';
import WalletsBottomComp from '../components/WalletsBottomComp';

const Wallet = () => {
  return (
    <>
      <div className="container">
        <TopComp />
        {/* <p className="wallet_title">Wallet</p> */}
        <WalletsBottomComp />
      </div>
    </>
  );
};

export default Wallet;
