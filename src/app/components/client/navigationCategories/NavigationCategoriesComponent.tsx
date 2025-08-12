"use client";

import {useActiveLinkStore} from "@/store/navigation/useActiveLinkStore";
import {NavigationItemComponent} from "../navigationItem/NavigationItem";
import {SimpleNavigationItem} from "../simpleNavigationItem/SimpleNavigationItem";
import styles from "./style.module.scss";
import {NavigationCategoryType} from "../navigation/NavigationComponent";

export default function NavigationCategoriesComponent({categories}: {categories: Array<NavigationCategoryType>}) {
    const activeLink = useActiveLinkStore((state) => state.activeLink);

    return categories.map((category, idx) => {
        const {title, articles} = category;
        const subitems = articles.map((article) => {
            const {name, title, url} = article;

            return <SimpleNavigationItem key={`${name}-${idx}`} isActive={url === activeLink} url={url} text={title} />;
        });

        return (
            <NavigationItemComponent key={idx} text={title}>
                {subitems}
            </NavigationItemComponent>
        );
    });
}
