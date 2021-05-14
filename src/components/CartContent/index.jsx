import { Box } from '@material-ui/core';
import CartItem from './CartItem';
import CartPrices from './CartPrices';

const CartContent = () => {
  const items = [1, 2, 3, 4, 5];
  const cartList = items.map((el) => <CartItem key={el} />);

  const checkItemLength = () => {
    if (items.length > 4) {
      return { maxHeight: 400, overflow: 'auto' };
    }
  };
  return (
    <>
      <Box style={checkItemLength()}>{cartList}</Box>
      <CartPrices />
    </>
  );
};

export default CartContent;
