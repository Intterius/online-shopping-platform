import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '5fr 4fr',
    justifyContent: 'center',
  },
}));

export { useStyles };
