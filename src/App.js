import './App.css';
import Home from './components/Home/Home';
import FontDetial from './components/FontDetialPage/FontDetial';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="product-detial" element={<FontDetial/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
