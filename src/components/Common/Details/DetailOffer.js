function DetailOffer(props) {
  console.log(props);
  return (
    <div>
      {props.offers.map((offer) => {
        return <div key={offer.id}>{offer.users_permissions_user}</div>;
      })}
    </div>
  );
}

export default DetailOffer;
