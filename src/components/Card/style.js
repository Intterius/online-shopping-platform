import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.rating.main,
        fontSize: theme.spacing(2),
        display: "flex",
        justifyContent: 'center'
    },
    cartContainer: {
        width: theme.spacing(22.5),
        height: theme.spacing(42.5),
        border: "1px solid #E3E5E4",
        padding: theme.spacing(1.2),
        borderRadius: theme.spacing(1),
        '&:hover': {
            border: '1px solid #85C645',
            transition: '0.5s'
        }
    },
    cartImgContainer: {
        display: "flex",
        width: "100%",
        height: theme.spacing(16.25),
    },
    cartImgContainerImg: {
        width: "100%",
        objectFit: "contain"

    },
    cartName: {
        display: "flex",
        justifyContent: "center",
        fontFamily: theme.fontFamily.main
    },
    cartNameP: {
        fontWeight: "bold",
        fontSize: theme.spacing(2.5),
        textTransform: "capitalize",
        margin: theme.spacing(0.6, 0),
        textAlign: "center",
    },
    // cartNameP2: {
    //     fontWeight: "bold",
    //     fontSize: theme.spacing(2.5),
    //     textTransform: "capitalize",
    //     margin: theme.spacing(0.6, 0),
    //     textAlign: "center",
    //     height: theme.spacing(3.5)
    // },
    cartPriceP: {
        color: "#85C645",
        fontSize: theme.spacing(2.5),
        fontWeight: "bold",
        margin: theme.spacing(0.6, 0)
    },
    iconsContainer:{
        display: "flex",
        position: "absolute",
        color: theme.palette.primary.main

    },
    icons:{
        height: "auto",
        width: "auto",
        borderRadius: theme.spacing(1),
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        margin: theme.spacing(0.5),
        backgroundColor: theme.palette.common.white,
        cursor: "pointer",
        "&:hover":{
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            transform: "scale(1.3)",
            transition: "0.4s"
        }

    }
}), {name: 'Card'})
