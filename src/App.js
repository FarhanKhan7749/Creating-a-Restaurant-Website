import React from "react";
import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./store/CartProvider";
//import MealsSummary from "./component/Meals/MealsSummary";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClick ={hideCartHandler}/>}
      <Header onClick = {showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
