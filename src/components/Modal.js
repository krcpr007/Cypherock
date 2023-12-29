import React from 'react';
import '../styles/Modal.css';
import { useState } from 'react';
const Modal = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState([]);

  const handleOnSubmit = async () => {
    if (!name || !address) return alert('Please fill all the fields');
    let arr = [] //creating an array of addresses because the api accepts array of addresses
    arr.push(address);
    let data = { "name": name, "addresses": arr };
    try { // using try catch to handle errors
      const resp = await fetch(`https://api.blockcypher.com/v1/btc/main/wallets?token=${process.env.REACT_APP_TOKEN}`, {
        method: 'POST',
        // headers: { // no use of headers written in the docs https://www.blockcypher.com/dev/?javascript#using-wallets
        // },
        body: JSON.stringify(data)
      })
      const resposeData = await resp.json();
      console.log(resposeData);
    } catch (error) {
      console.log(error);
      alert('Something went wrong')
    } finally {
      alert('Wallet Imported Successfully')
      setName('');
      setAddress('');
      onClose();
      window.location.reload(); // to reload the page after importing the wallet  // i now this not a good practice 
    }
  }


  if (!open) return null; // if open is false then return null
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="topDiv">
            <div className="heading">
              <span>Import Wallet</span>
            </div>
            <div className="close_btn">
              <i onClick={onClose} className="bi bi-x"></i>
            </div>
          </div>
          <div className="bottomDiv">
            <div>
              <label htmlFor="name" className='modal_label'>Enter your Wallet Name :</label>
              <input type="text" onChange={e => setName(e.target.value)} id='name' name='name' style={{ height: '40px' }} className='inputSearch_Box' />
            </div>
            <div>
              <label className='modal_label' htmlFor="address">Enter your Mnemonic :</label>
              <input type="textarea" name="address" onChange={e => setAddress(e.target.value)} id="address" className='inputSearch_Box' />
            </div>
            <div className='modal_btn_div'>
              <button onClick={handleOnSubmit} className='modal_btn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
