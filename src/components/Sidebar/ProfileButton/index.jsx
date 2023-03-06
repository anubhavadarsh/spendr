import clsx from "clsx";
import Litaci from "assets/images/profile/litaci.png";
import styles from "./index.module.scss";

const ProfileButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles["image-cont"]}>
        <div className={styles.image}>
          <img src={Litaci} alt="your profile" />
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={clsx(
            styles["text--primary"],
            styles["text--align"],
            styles["text--clickable"]
          )}
        >
          <span>Anubhav Adarsh</span>
        </div>
        <div className={clsx(styles["text--secondary"], styles["text--align"])}>
          <span>Software Engineer</span>
        </div>
      </div>
      <div className={styles.dropdown}>
        <span className="material-icons">keyboard_arrow_down</span>
      </div>
    </div>
  );
};

export default ProfileButton;
