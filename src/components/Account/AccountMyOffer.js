import AccountProductCard from "./AccountProductCard";

function AccountMyOffer(props) {
  return (
    <div>
      {props.offers.map((offer) => {
        return offer.product ? (
          <AccountProductCard
            type={props.type}
            key={offer.id}
            offer={offer}
            product={offer.product}
          />
        ) : null;
      })}
    </div>
  );
}

export default AccountMyOffer;
