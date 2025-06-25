import styles from "./style.module.scss";

const NavigationTitleComponent = ({title}: {title?: string}): React.ReactNode => <h3 className={styles.title}>{title}</h3>;

export default NavigationTitleComponent;
