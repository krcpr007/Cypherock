import './App.css';
import './styles/SideMenu.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LastTransaction from './pages/LastTransaction';
import Wallet from './pages/Wallets';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>{/*// or we can wrap whis in the index.js file */}
        <Nav />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/last-transaction" element={<LastTransaction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
