import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
        <div className={classes.linksContainer}>
          <Link to={'#'} className={classes.links}>
            <ShoppingCartOutlinedIcon className={classes.cart} />
            <div className={classes.cartCounter}>0</div>
          </Link>
          <Link to={'./account/login'} className={classes.links} title='Login'>
            <PersonIcon className={classes.user} />
          </Link>
          <Link to={'#'} className={clsx(classes.links, classes.exit)}>
            <ExitToAppIcon />
          </Link>
          <div className={classes.menuBtn}>
            <MenuIcon />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default InteractionLinks;
