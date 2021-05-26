import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartPrices from './CartPrices';

const CartContent = () => {
  const productList = useSelector((state) => state.cartReducer);

  const cartList = productList.map((item) => {
    return (
      <CartItem
        key={item.id}
        image={item.imagesSet[0].url}
        title={item.title}
        price={item.price.toFixed(2)}
        description={item.description}
        id={item.id}
        quantity={item.quantity}
        measure={item.measureUnit}
      />
    );
  });

  const checkSroll = () => {
    if (productList.length > 4) {
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
