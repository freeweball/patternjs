import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import {useActiveLinkStore} from "@/store/navigation/useActiveLinkStore";
import {useActiveBurgerStore} from "@/store/header/useActiveBurgerStore";

export type SimpleNavigationItemType = {
    url: string;
    isActive: boolean;
    text: string;
};

export const SimpleNavigationItem = ({
    url,
    isActive,
    text,
}: SimpleNavigationItemType) => {
    const setActiveLink = useActiveLinkStore((state) => state.setActiveLink);
    const activeBurger = useActiveBurgerStore((state) => state.activeBurger);
    const setActiveBurger = useActiveBurgerStore(
        (state) => state.setActiveBurger,
    );
    const handleClick = (): void => {
        setActiveLink(url);
        setActiveBurger(!activeBurger);
    };
    const textClass = classNames(styles.text, isActive && styles.active);

    return (
        <Link onClick={handleClick} className={textClass} href={url}>
            {text}
        </Link>
    );
};
