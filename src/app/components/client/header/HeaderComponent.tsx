import React from "react";
import styles from "./style.module.scss";

export default function HeaderComponent({children}: {children: React.ReactNode}) {
    return <header className={styles.header}>{children}</header>;
}
