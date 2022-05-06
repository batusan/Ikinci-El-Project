import styles from "../../styles/Account.module.css";
import { useState } from "react";
import AccountCategories from "./AccountCategories";
import AccountOffers from "./AccountOffers";
import { useProductContext } from "../../contexts/ProductContext";

function AccountBody() {
  const [renderType, setRenderType] = useState("PRODUCT");
  const { products, offers } = useProductContext();
  return (
    <div className={styles.Body}>
      <AccountCategories setRenderType={setRenderType} />
      <AccountOffers type={renderType} products={products} offers={offers} />
    </div>
  );
}

export default AccountBody;
