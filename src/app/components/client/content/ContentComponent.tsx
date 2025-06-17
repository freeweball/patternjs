import styles from "./style.module.scss";

export const ContentComponent = ({children}: {children: React.ReactNode}) => {
    return (
        <section className={styles.content}>
            <div className={styles.header}></div>
            <div className={styles.main}>{children}</div>
        </section>
    );
};
