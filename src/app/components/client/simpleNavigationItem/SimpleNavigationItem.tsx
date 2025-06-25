import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import {useActiveLinkStore} from "@/store/navigation/useActiveLinkStore";

export type SimpleNavigationItemType = {
    url: string;
    isActive: boolean;
    text: string;
};

export const SimpleNavigationItem = ({url, isActive, text}: SimpleNavigationItemType) => {
    const setActiveLink = useActiveLinkStore((state) => state.setActiveLink);
    const handleClick = (): void => setActiveLink(url);
    const textClass = classNames(styles.text, isActive && styles.active);

    return (
        <Link onClick={handleClick} className={textClass} href={url}>
            {text}
        </Link>
    );
};
