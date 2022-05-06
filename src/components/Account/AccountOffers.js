import { useState, useEffect } from "react";
import AccountMyProducts from "./AccountMyProducts";

function AccountOffers(props) {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (props.products) setProducts(props.products);
    if (props.offers) setOffers(props.offers);
  }, [props.products, props.offers])
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
