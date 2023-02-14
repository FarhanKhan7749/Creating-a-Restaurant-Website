import React from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
//import MealsSummary from "./component/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
