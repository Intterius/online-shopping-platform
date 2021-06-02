import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const ErrorFormDialog = ({ open, handleCloseError }) => {
  const classes = useStyles();

  const handleClose = () => {
    handleCloseError(false);
  };

  return (
    <Dialog disableBackdropClick open={open} keepMounted>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <DialogTitle className={classes.title}>
        {'Something went wrong!'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check your cart list in case some of the products went out of
          stock. In that case, please remove them and try again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className={classes.ok} onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorFormDialog;
