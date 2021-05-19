import { useStyles } from './styles';
import items from '../../../food';

const CartPageContent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src='' alt='' />
        </div>
      </div>
    </>
  );
};

export default CartPageContent;
