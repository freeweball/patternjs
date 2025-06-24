import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import {LinkConfig} from "@/app/configs/LinkConfig";

export type SimpleNavigationItemType = {
    path: keyof typeof LinkConfig;
    text: string;
    active: boolean;
    cb: (value: string) => void;
    id: string;
};

export const SimpleNavigationItem = (props: SimpleNavigationItemType) => {
    const handleActive = () => props.cb(props.id);
    const textClass = classNames(styles.text, props.active && styles.active);
    const {path, text} = props;
    const url = LinkConfig[path];

    return (
        <Link onClick={handleActive} className={textClass} href={url}>
            {text}
        </Link>
    );
};
