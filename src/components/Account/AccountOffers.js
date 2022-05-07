import { useState, useEffect } from "react";
import AccountMyOffer from "./AccountMyOffer";
import AccountMyProducts from "./AccountMyProducts";

function AccountOffers(props) {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (props.products) setProducts(props.products);
    if (props.offers) setOffers(props.offers);
  }, [props.products, props.offers]);
  return (
    <div>
      {props.type === "PRODUCT" ? (
        <AccountMyProducts type={props.type} products={products} />
      ) : (
        <AccountMyOffer type={props.type} offers={offers} />
      )}
    </div>
  );
}

export default AccountOffers;
