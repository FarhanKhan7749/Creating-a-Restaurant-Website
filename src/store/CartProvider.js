import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
  };
  const removeItemFromCartHandler = (id) => {};

  const incrementHandler = (item) => {
    const itemsCopy = [...items];
    const idx = itemsCopy.findIndex((i) => i.id === item.id);
    itemsCopy[idx].quantity++;
    updateItems(itemsCopy);
  };

  const decrementHandler = (item) => {
    const itemsCopy = [...items];
    const idx = itemsCopy.findIndex((i) => i.id === item.id);

    if (idx !== -1 && itemsCopy[idx].quantity < 2) {
      itemsCopy.splice(idx, 1);
      updateItems(itemsCopy);
    } else {
      itemsCopy[idx].quantity--;
      updateItems(itemsCopy);
    }
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    quantityplus: incrementHandler,
    quantityminus: decrementHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
