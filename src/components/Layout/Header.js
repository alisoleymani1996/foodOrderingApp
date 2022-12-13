import styles from './Header.module.css';
import {Fragment} from "react";
import mealImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles['header']}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={styles['main-img']}>
                <img src={mealImage} alt={"the table of delicious foods!"}/>
            </div>
        </Fragment>
    )
}

export default Header;