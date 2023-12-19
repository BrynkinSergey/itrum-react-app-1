import styles from './style.module.scss'

const EditField = ({children, title}) => {
    return (
        <div className={styles.editField}>
            <p className={styles.boldText}>{title}</p>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    );
};

export default EditField;
