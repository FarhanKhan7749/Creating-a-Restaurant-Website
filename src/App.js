import React from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
//import MealsSummary from "./component/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
