import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartPrices from './CartPrices';

const CartContent = () => {
  const productList = useSelector((state) => state.addToCartReducer);

  const cartList = productList.map((item) => (
    <CartItem
      key={item.id}
      image={item.imagesSet[0].url}
      title={item.title}
      price={item.price}
      description={item.description}
      id={item.id}
    />
  ));

  const checkSroll = () => {
    if (productList.length >= 4) {
      return { maxHeight: 400, overflow: 'auto' };
    }
  };

  return (
    <>
      {productList.length ? (
        <>
          <Box style={checkSroll()}>{cartList}</Box>
          <CartPrices />
        </>
      ) : (
        'Your cart is currently empty!'
      )}
    </>
  );
};

export default CartContent;
