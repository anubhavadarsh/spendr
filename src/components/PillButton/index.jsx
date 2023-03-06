import { Link } from "react-scroll";
import clsx from "clsx";
import styles from "./index.module.scss";

const PillButton = ({ icon, title, id }) => {
  return (
    <Link
      // activeClass={styles["button-active"]}
      to={id}
      spy={true}
      smooth={true}
      duration={500}
      className={clsx(styles.button)}
      containerId="containerElement"
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default PillButton;
