import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';

const CartItem = () => {
  const classes = useStyles();
  const { productList } = useSelector((state) => state.addToCartReducer);

  return (
    <div className={classes.item}>
      <Box display='flex' justifyContent='center'>
        <div className={classes.itemComponents}>
          <Link to={'#'}>
            <img
              className={classes.itemImg}
              src='https://thumbs.dreamstime.com/b/orange-fruit-green-leaves-isolated-white-background-clipping-path-full-depth-field-fresh-177726692.jpg'
            />
          </Link>
          <Box display='grid'>
            <Link style={{ textDecoration: 'none' }} to={'#'}>
              <p className={classes.itemDescription}>
                Watermelon - 3 kg / Blue
              </p>
            </Link>
            <p className={classes.priceAndQuantity}>1 x $489.00 USD</p>
          </Box>
          <div>
            <Box fontWeight='fontWeightBold' className={classes.removeItemBtn}>
              <ClearIcon className={classes.removeIcon} />
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CartItem;
