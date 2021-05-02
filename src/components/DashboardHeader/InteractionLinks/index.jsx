import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.png';
import clsx from 'clsx';

const InteractionLinks = () => {
  const classes = useStyles();
  const [sticky, setSticky] = useState(false);

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
    <Box className={clsx(classes.container, sticky ? classes.sticky : '')}>
      <Box
        display='flex'
        justifyContent='space-between'
        className={classes.interactionBox}
      >
        <Box display='flex' alignItems='center'>
          <Link to='/home'>
            <img src={logo} alt='shop-logo' />
          </Link>
        </Box>
        <Box className={classes.linksContainer}>
          <Link to={'#'} className={classes.links}>
            <ShoppingCartOutlinedIcon className={classes.cart} />
            <Box className={classes.cartCounter}>0</Box>
          </Link>
          <Link to={'./account/login'} className={classes.links} title='Login'>
            <PersonIcon className={classes.user} />
          </Link>
          <Box className={classes.menuBtn}>
            <MenuIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InteractionLinks;
