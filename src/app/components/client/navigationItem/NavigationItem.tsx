"use client";

import React, {useState} from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

export type NavigationItemType = {
    text: string;
    children?: React.ReactNode;
};

export const NavigationItemComponent = (props: NavigationItemType) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    const textClass = classNames(
        styles["text"],
        isActive ? styles["active"] : styles[""],
    );

    return (
        <li className={styles.item}>
            <div className={textClass} onClick={handleClick}>
                {props.text}
            </div>
            <ul className={isActive ? styles.show : styles.hide}>
                {props.children}
            </ul>
        </li>
    );
};
