import { useState } from "react";
import AccountMyProducts from "./AccountMyProducts";

function AccountOffers(props) {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  return (
    <div>
      {props.type === "PRODUCT" ? (
        <AccountMyProducts products={products} />
      ) : (
        "OFFERS"
      )}
    </div>
  );
}

export default AccountOffers;
