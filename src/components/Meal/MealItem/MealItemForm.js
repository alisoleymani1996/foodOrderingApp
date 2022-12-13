import {useState, useRef} from "react";
import Input from "../../UI/Input";
import styles from './MealItemForm.module.css';


const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;

        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
        }

        props.onAddToCart(enteredAmountNumber);

    }
    return (
        <form className={styles['form']}>
            <Input label={'Amount'} ref={amountInputRef} input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1',
                step: '1',
            }}/>
            <button onClick={submitHandler}>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;