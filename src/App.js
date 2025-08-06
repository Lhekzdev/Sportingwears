import Home from "./components/Routes/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Authentication from "./components/Routes/authentication/Authentication";
import Shop from "./components/Routes/shop/shop.component";


import Checkout from "./components/checkout/Checkout";

// const Shop = () => {
//   return < h1>This is shop page </h1>;
// }


const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        {/* <Route path="home" element={<Home />} /> */}
        <Route index ={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
    
<Route path="/checkout" element={<Checkout />} />

          </Route>
        </Routes>
        );



};

        export default App;

