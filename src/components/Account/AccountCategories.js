import styles from "../../styles/Account.module.css";

function AccountCategories() {
  return (
    <div className={styles.CategoryWrapper}>
      <div className={styles.CategoryItem}>Teklif Aldıklarım</div>
      <div className={styles.CategoryItem}>Teklif Verdiklerim</div>
    </div>
  );
}

export default AccountCategories;
