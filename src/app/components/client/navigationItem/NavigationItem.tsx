"use client";

import {useState} from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

export type NavigationItemType = {
    id: string;
    text: string;
    cb: (value: Array<string>) => void;
    activeIds: Array<string>;
};

export const NavigationItemComponent = (props: NavigationItemType) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
        props.cb(isActive ? props.activeIds.filter((id) => id !== props.id) : [...props.activeIds, props.id]);
    };
    const textClass = classNames(styles["text"], isActive ? styles["active"] : styles[""]);

    return (
        <div className={textClass} onClick={handleClick}>
            {props.text}
        </div>
    );
};
