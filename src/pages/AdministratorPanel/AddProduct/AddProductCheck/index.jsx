import React from "react";
import {Box, Button, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    main:{
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: theme.spacing(60),
        height: theme.spacing(8),
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1),
        margin: theme.spacing(10),
        background: "rgba(255, 255, 255)"
    },
    button: {
        color: theme.palette.common.white,
        fontSize: theme.spacing(2),
        margin: theme.spacing(1)
    },
    disable:{
        display: "none"
    }

}));

const AddProductCheck = ({incorrect, handleClose}) =>{
    const classes = useStyles();

    return(
        <Box className={incorrect.incorrectToEdit? classes.main : classes.disable}>
            <Box className={classes.container}>
                <Typography >Please set data as required.</Typography>
                <Button className={classes.button} onClick={handleClose} variant="contained" color="secondary">Ok</Button>
            </Box>
        </Box>
    );
};

export default AddProductCheck;
