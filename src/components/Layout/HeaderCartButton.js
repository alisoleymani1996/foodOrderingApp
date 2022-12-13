import styles from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const btnClass = `${styles['button']} ${btnIsHighlighted ? styles['bump'] : ''}`


    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => setBtnIsHighlighted(false), 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return (
        <button className={btnClass} onClick={props.onShowCart}>
            <span className={styles['icon']}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={styles['badge']}>{cartCtx.items.length}</span>
        </button>
    )
}

export default HeaderCartButton;