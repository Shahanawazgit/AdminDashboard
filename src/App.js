import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import Customers from "./components/Customers/Customers";
import MainDash from "./components/MainDash/MainDash";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="AppGlass">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<MainDash />} />
              <Route exact path="/Dashboard" element={<MainDash />} />
              <Route exact path="/Orders" element={<Orders />} />
              <Route exact path="/Customers" element={<Customers />} />
              <Route exact path="/Products" element={<Products />} />
              <Route exact path="/Analytics" element={<Analytics />} />
            </Routes>
            <RightSide />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
