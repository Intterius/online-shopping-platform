import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    width: theme.spacing(15.625),
    height: theme.spacing(5),
    margin: theme.spacing(2.5, 'auto', 'auto', 'auto'),
  },
  btnAddToCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: theme.spacing(2.25),
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:active': {
      transform: 'scale(0.9)',
      // transition: "none"
    },
  },
}));

const Button = ({ onClick, disable }) => {
  const classes = useStyles();

  return (
    <div
      onClick={onClick}
      className={classes.buttonContainer}
      style={{
        pointerEvents: disable ? 'none' : 'auto',
      }}
    >
      <div
        className={classes.btnAddToCart}
        style={{
          background: disable ? '#AAAAAA' : '',
          color: disable ? '#777777' : '',
        }}
      >
        Add to cart
      </div>
    </div>
  );
};

export default Button;
