"use client";

import styles from "./style.module.scss";
import data from "./navigationData";
import {NavigationItemComponent} from "../navigationItem/NavigationItem";
import {SimpleNavigationItem} from "../simpleNavigationItem/SimpleNavigationItem";
import {useState} from "react";
import NavigationTitleComponent from "../navigationTitle/NavigationTitleComponent";

export const NavigationComponent = () => {
    const [activeIds, setActiveIds] = useState<Array<string>>([]);
    const [activeLinkId, setActiveLinkId] = useState("");

    const handleActive = (value: Array<string>) => {
        setActiveIds(value);
    };
    const handleActiveLink = (value: string) => {
        setActiveLinkId(value);
    };

    const navigationItems = data.map(({category, id, patterns}) => {
        const items = patterns.map(({category, name, id}: {category: any; name: any; id: any}) => (
            <li className="navigation-item__wrapper" key={id}>
                <SimpleNavigationItem active={id === activeLinkId} path={category} text={name} id={id} cb={handleActiveLink} />
            </li>
        ));
        const ulClass = styles[activeIds.includes(id) ? "show" : "hide"];

        return (
            <li key={id}>
                <NavigationItemComponent id={id} cb={handleActive} text={category} activeIds={activeIds} />
                <ul className={ulClass}>{items}</ul>
            </li>
        );
    });

    return (
        <nav className={styles.main}>
            <div className="logo"></div>
            <NavigationTitleComponent title={"Паттерны"} />
            <ul>{navigationItems}</ul>
        </nav>
    );
};
