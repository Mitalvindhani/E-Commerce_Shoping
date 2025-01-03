import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Shop from './main pages/shop';
import Men from './main pages/men';
import Women from './main pages/women';
import Kids from './main pages/kids';
import Footer from './components/footer/footer';
import ProductView from './components/productView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kids />} />
          <Route path="/product" element={<ProductView />}>
            <Route path=':id' element={<ProductView />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
