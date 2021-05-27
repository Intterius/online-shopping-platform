import { Box, Zoom } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.png';
import clsx from 'clsx';
import CartContent from '../../CartContent';
import AdministrationPanel from '../../../pages/AdministratorPanel';

const InteractionLinks = () => {
  const classes = useStyles();
  const [sticky, setSticky] = useState(false);
  const [showCartProducts, setShowCartProducts] = useState(false);
  const { status, user } = useSelector((state) => state.tokenReducer);
  const productList = useSelector((state) => state.cartReducer);
  const { role } = useSelector((state) => state.userRoleReducer);

  const scrollCheck = () => {
    if (window.pageYOffset >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);

    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);

  return (
    <div className={clsx(classes.container, sticky ? classes.sticky : '')}>
      <Box
        display='flex'
        justifyContent='space-between'
        className={classes.interactionBox}
      >
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Link to='/home'>
            <img src={logo} alt='shop-logo' />
          </Link>
        </Box>
        <Link to={'/home'} className={classes.homeBtn}>
          Home
        </Link>
        {role && (
          <Box display={'flex'} alignItems={'center'}>
            <AdministrationPanel />
          </Box>
        )}
        <div className={classes.linksContainer}>
          <Box
            display='flex'
            justifyContent='start'
            alignContent='center'
            style={{ position: 'relative', width: '50%' }}
            onMouseEnter={() => setShowCartProducts(true)}
            onMouseLeave={() => setShowCartProducts(false)}
          >
            <Link to={'/cart'} className={classes.links}>
              <div style={{ position: 'relative' }}>
                <ShoppingCartOutlinedIcon className={classes.cart} />
                <div className={classes.cartCounter}>{productList.length}</div>
              </div>
            </Link>
            <Zoom in={showCartProducts} timeout={350}>
              <Box className={classes.cartProducts}>
                <CartContent />
              </Box>
            </Zoom>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            alignContent='center'
            style={{ width: '50%' }}
          >
            <Link
              to={user ? '/account' : '/account/login'}
              className={classes.links}
              title={user ? 'Profile' : 'Login'}
            >
              <PersonIcon className={classes.user} />
            </Link>
            {status && (
              <Link
                onClick={() => {
                  localStorage.removeItem('key');
                  window.location.reload();
                }}
                to={'#'}
                className={clsx(classes.links, classes.exit)}
                title='Logout'
              >
                <ExitToAppIcon />
              </Link>
            )}

            <div className={classes.menuBtn}>
              <MenuIcon />
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default InteractionLinks;
