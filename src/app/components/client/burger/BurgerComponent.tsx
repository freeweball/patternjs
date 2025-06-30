"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import {useActiveBurgerStore} from "@/store/header/useActiveBurgerStore";

export default function BurgerComponent() {
    const activeBurger = useActiveBurgerStore((state) => state.activeBurger);
    const setActiveBurger = useActiveBurgerStore((state) => state.setActiveBurger);
    const handleClick = () => setActiveBurger(!activeBurger);
    const burgerIconClass = classNames(styles.burgerIcon, activeBurger ? styles.active : "");

    return (
        <div onClick={handleClick} className={styles.burger}>
            <i className={burgerIconClass}></i>
        </div>
    );
}
