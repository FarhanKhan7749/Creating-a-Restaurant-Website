import Input from '../../UI/Input';
import classes from './MealItemsForm.module.css';

const MealItemsForm = (props) => {
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ADD</button>
        </form>
    )
}

export default MealItemsForm;