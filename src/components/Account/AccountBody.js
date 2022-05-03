import styles from "../../styles/Account.module.css";
import AccountCategories from "./AccountCategories";

function AccountBody() {
  return <div className={styles.Body}>
      <AccountCategories />
  </div>;
}

export default AccountBody;
