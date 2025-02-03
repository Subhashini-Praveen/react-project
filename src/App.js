import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProductsList/>}></Route>
          <Route path='/add' element={<AddProduct/>}></Route>
        </Routes>
    </Router>
      </div>
  );
}

export default App;
