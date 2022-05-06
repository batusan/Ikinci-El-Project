import AccountProductCard from './AccountProductCard';
function AccountMyProducts(props) {
  console.log(props);
  return <div>{
    props.products.map((product) => {
      return product.offers.map((offer) => {
        return <AccountProductCard offer={offer} product={product} />
      })
    })}
  </div>;
}

export default AccountMyProducts;
