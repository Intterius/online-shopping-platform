import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkStyle,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const DescriptiveAccountHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        display='grid'
        justifyContent='center'
        className={classes.boxBackground}
      >
        <Typography component='h1' variant='h4' className={classes.boxTitle}>
          {title}
        </Typography>
        <Breadcrumbs aria-label='breadcrumb' className={classes.breadLinks}>
          <LinkStyle component={Link} to='/home' className={classes.homeBtn}>
            {'Home'}
          </LinkStyle>
          <div>{title}</div>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default DescriptiveAccountHeader;
