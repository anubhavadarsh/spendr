import clsx from "clsx";
import styles from "./index.module.scss";

const Card = ({ children, className }) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};

export default Card;
