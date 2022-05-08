import AccountProductCard from "./AccountProductCard";
function AccountMyProducts(props) {
  return (
    <div>
      {props.products.map((product) => {
        return product.offers.map((offer) => {
          return (
            <AccountProductCard
              type={props.type}
              key={offer.id}
              offer={offer}
              product={product}
            />
          );
        });
      })}
    </div>
  );
}

export default AccountMyProducts;
