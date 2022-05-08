import styles from "@/styles/Account.module.css";

function AccountCategories(props) {
  return (
    <div className={styles.CategoryWrapper}>
      <div
        className={styles.CategoryItem}
        onClick={(e) => {
          props.setRenderType("PRODUCT");
        }}
      >
        Teklif Aldıklarım
      </div>
      <div
        className={styles.CategoryItem}
        onClick={(e) => {
          props.setRenderType("OFFERS");
        }}
      >
        Teklif Verdiklerim
      </div>
    </div>
  );
}

export default AccountCategories;
