// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
