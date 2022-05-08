import styles from "@/styles/Account.module.css";
import { useState } from "react";
import AccountCategories from "./AccountCategories";
import AccountOffers from "./AccountOffers";
import { useUserContext } from "@/contexts/UserContext";

function AccountBody() {
  const [renderType, setRenderType] = useState("PRODUCT");
  const { myProducts, myOffers } = useUserContext();
  return (
    <div className={styles.Body}>
      <AccountCategories setRenderType={setRenderType} />
      <AccountOffers type={renderType} products={myProducts} offers={myOffers} />
    </div>
  );
}

export default AccountBody;
