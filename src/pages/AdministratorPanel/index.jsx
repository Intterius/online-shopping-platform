import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PollIcon from '@material-ui/icons/Poll';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PeopleIcon from '@material-ui/icons/People';
import logo from '../../components/DashboardHeader/InteractionLinks/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily: 'Lemonada, cursive',
    fontSize: theme.spacing(1.8),
    fontWeight: '700',
    color: theme.palette.primary.main,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(4),
  },
  icons: {
    color: theme.palette.secondary.main,
  },
}));

export default function AdministrationPanel() {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box className={classes.logo}>
                <img src={logo} alt="logo"/>
            </Box>
            <Divider/>
            <List>
                {['Dashboard', 'Products', 'Users'].map((text, index) => (
                    <Link key={index} style={{textDecoration: "none"}} to={'/admin-dashboard'}>
                        <ListItem className={classes.btn} button>
                            <ListItemIcon>{index === 0 ? <PollIcon className={classes.icons}/>
                                : index === 1 ? <FastfoodIcon className={classes.icons}/>
                                    : <PeopleIcon className={classes.icons}/>
                            }</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button className={classes.btn} onClick={toggleDrawer('left', true)}>
          Administration panel
        </Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
