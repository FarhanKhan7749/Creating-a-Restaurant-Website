import Input from '../../UI/Input';
import classes from './MealItemsForm.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItemsForm = (props) => {
    const cartCtx = useContext(CartContext);
    const addItemsToCart = (event) => {
        event.preventDefault();
        console.log("hello");
        const quantity = document.getElementById('amount_'+props.id).value
        cartCtx.addItem({...props.item, quantity: quantity})
    }
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={addItemsToCart}>+ADD</button>
        </form>
    )
}

export default MealItemsForm;