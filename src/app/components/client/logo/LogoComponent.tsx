import Link from "next/link";
import styles from "./style.module.scss";
import {LinkConfig} from "@/app/configs/LinkConfig";

export const LogoComponent = () => {
    return (
        <div className={styles.logo}>
            <Link href={LinkConfig.index}>Frontend-content</Link>
        </div>
    );
};
