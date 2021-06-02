import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchTitle: {
    fontSize: theme.spacing(3.5),
    fontFamily: 'Lemonada, cursive',
    textAlign: 'center',
    fontWeight: '400',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(1, 10),
  },

  cardContainer: {
    margin: theme.spacing(0.6),
  },
}));

export { useStyles };
