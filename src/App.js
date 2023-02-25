import React from "react";
import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Modal from "./component/UI/Modal";
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
      {cartIsShown && <Modal onClick={hideCartHandler}> <Cart onClick ={hideCartHandler}/></Modal>}
      <Header onClick = {showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
