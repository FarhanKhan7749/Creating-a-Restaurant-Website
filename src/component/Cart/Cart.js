import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    
    const cartItem = 
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => 
                <li key={Math.random()}>
                    Name:{item.name}
                    price:{item.price}
                    Quantity:{item.quantity}
                </li>)}
        </ul>;

    let totalPrice = 0;
    cartCtx.items.forEach(item => {
        totalPrice = totalPrice + Number(item.price)
    });
    
    return (
        <Modal onClick ={props.onClick}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalPrice}</span>
            </div> 
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            <div></div>
        </Modal>
    )
};

export default Cart;