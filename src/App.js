// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ShareLayout from "./components/ShareLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
