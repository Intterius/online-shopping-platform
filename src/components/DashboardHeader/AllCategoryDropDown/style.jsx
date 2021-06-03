import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  allCategoryStyle: {
    background: theme.palette.common.white,
    boxShadow: theme.spacing(0, 0, 0, 0),
    width: theme.spacing(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      borderBottom: '1px solid lightGray',
      marginBottom: theme.spacing(1),
    },
  },
  navContainer: {
    display: 'flex',
    width: '100%',
    height: theme.spacing(6.5),
    fontFamily: theme.fontFamily.main,
    fontSize: theme.spacing(2.5),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      flexFlow: 'column wrap',
    },
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    border: 0,
    outline: 0,
    width: theme.spacing(50),
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
  },
  searchButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: '100%',
    width: theme.spacing(16),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
    },
  },
  iconBetween: {
    display: 'flex',
    alignItems: 'center',
    color: '#CECECE',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    fontSize: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  categoryAndSearchContainer: {
    border: '1px solid #CECECE',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      flexFlow: 'column wrap',
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
    width: theme.spacing(36),
  },
}))(MenuItem);

export { useStyles, StyledMenu, StyledMenuItem };
