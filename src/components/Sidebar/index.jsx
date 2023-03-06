import PillButton from "components/PillButton";
import ProfileButton from "./ProfileButton/index";
import styles from "./index.module.scss";
import { links } from "./links";

const SideBar = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <ProfileButton />
        {links.map((link) => (
          <PillButton
            key={link.id}
            id={link.id}
            title={link.title}
            icon={<span className="material-icons">{link.icon}</span>}
          />
        ))}
      </aside>
      <main className={styles.page} id="containerElement">
        {children}
      </main>
    </div>
  );
};

export default SideBar;
