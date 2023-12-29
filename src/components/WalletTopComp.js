import React, { useState } from 'react';
import '../styles/TopComp.css';
import Modal from './Modal';

const TopComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="topComp">
        <div className="right">
          <div className="searchBox">
            <div className="btn">
              <li className="yyy">
                <i className="bi bi-plus"></i>
                <p className="add" onClick={() => { setShowModal(!showModal) }}>Import Wallet</p>
              </li>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default TopComp;
