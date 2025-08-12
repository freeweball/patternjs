"use client";

import styles from "./style.module.scss";
import NavigationTitleComponent from "../navigationTitle/NavigationTitleComponent";
import classNames from "classnames";
import {useActiveBurgerStore} from "@/store/header/useActiveBurgerStore";
import NavigationCategoriesComponent from "../navigationCategories/NavigationCategoriesComponent";

export type NavigationItemType = {
    name: string;
    title: string;
    categories: Array<NavigationCategoryType>;
};

export type NavigationCategoryType = {
    name: string;
    title: string;
    articles: Array<NavigationArticleType>;
};

export type NavigationArticleType = {
    name: string;
    title: string;
    url: string;
};

type NavigationDataType = {
    data: Array<NavigationItemType>;
};

export const NavigationComponent = ({data}: NavigationDataType) => {
    const isHide = useActiveBurgerStore((state) => !state.activeBurger);
    const mainStyles = classNames(styles.main, isHide ? styles.hide : "");

    return (
        <nav className={mainStyles}>
            {data.map((data, id) => {
                return (
                    <div key={id}>
                        <NavigationTitleComponent title={data.title} />
                        <ul>
                            <NavigationCategoriesComponent categories={data.categories} />
                        </ul>
                    </div>
                );
            })}
        </nav>
    );
};
