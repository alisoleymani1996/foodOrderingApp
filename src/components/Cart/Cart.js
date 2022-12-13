import {useContext} from "react";

import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItem = cartCtx.items.length > 0;


    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }
    const cartItems = <ul className={styles['cart-items']}>{
        cartCtx.items.map(item => {
            return <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                             onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>
        })}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles['total']}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles['actions']}>
                <button className={styles['button-alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={styles['button']}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;