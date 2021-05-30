import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const FormDialog = ({ open }) => {
  const classes = useStyles();

  const handleClose = () => {
    window.location.reload();
  };

  return (
    <Dialog disableBackdropClick open={open} keepMounted>
      <CheckCircleOutlineIcon className={classes.successIcon} />
      <DialogTitle className={classes.title}>
        {'Your order has been successfully processed!'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check your email inbox for more details about your order and
          shipping time.
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

export default FormDialog;
