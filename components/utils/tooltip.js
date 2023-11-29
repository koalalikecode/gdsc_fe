import styles from "./tooltip.module.css"
import {useState} from "react";

const Tooltip = ({children, text, ...rest}) => {
    const [show, setShow] = useState(false);

    return (
        <span className={styles.tooltip_container}>
            <span className={show ? styles.tooltip_box_visible : styles.tooltip_box}>
                {text}
                <span className={styles.tooltip_arrow}/>
            </span>
            <span
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                {...rest}
            >
                {children}
            </span>
        </span>
    );
};

export default Tooltip