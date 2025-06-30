"use client";

import styles from "./style.module.scss";
import {NavigationItemComponent} from "../navigationItem/NavigationItem";
import {SimpleNavigationItem} from "../simpleNavigationItem/SimpleNavigationItem";
import NavigationTitleComponent from "../navigationTitle/NavigationTitleComponent";
import {useActiveLinkStore} from "@/store/navigation/useActiveLinkStore";
import {LinkConfig} from "@/app/configs/LinkConfig";
import classNames from "classnames";
import {useActiveBurgerStore} from "@/store/header/useActiveBurgerStore";

type NavigationComponentType = {
    navigationData: Array<[string, Array<{name: string; articleId: string}>]>;
};

export const NavigationComponent = (props: NavigationComponentType) => {
    const isHide = useActiveBurgerStore((state) => !state.activeBurger);
    const activeLink = useActiveLinkStore((state) => state.activeLink);
    const items = props.navigationData.map((dataItem, itemId) => {
        const [category, categoryData] = dataItem;
        const subItems = categoryData.map(({name, articleId}, subItemId) => {
            const url = LinkConfig[articleId as keyof typeof LinkConfig];

            return (
                <SimpleNavigationItem
                    key={subItemId}
                    isActive={url === activeLink}
                    url={url}
                    text={name}
                />
            );
        });

        return (
            <NavigationItemComponent key={itemId} text={category}>
                {subItems}
            </NavigationItemComponent>
        );
    });

    const mainStyles = classNames(styles.main, isHide ? styles.hide : "");

    return (
        <nav className={mainStyles}>
            <NavigationTitleComponent title={"Паттерны"} />
            <ul>{items}</ul>
        </nav>
    );
};
