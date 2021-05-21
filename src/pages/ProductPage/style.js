import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    image: {
        display: "flex",
        objectFit: "contain",
        margin: theme.spacing(7),
        width: "450px",
        height: "350px",

    },
    container: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(3)
    },
    descriptionContainer: {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        marginLeft: theme.spacing(5)
    },
    title: {
        fontFamily: 'Lemonada, cursive',
        fontSize: theme.spacing(4.2),
        fontWeight: "bold",
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(4)
    },
    price: {
        fontSize: theme.spacing(3),
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1.2),
        fontWeight: "bold"
    },
    rating: {
        color: theme.palette.rating.main,
        fontSize: theme.spacing(3),
        marginLeft: theme.spacing(-2),
    },
    description: {
        fontFamily: "Open Sans",
        fontSize: theme.spacing(2),
        textAlign: "left",
        margin: theme.spacing(1.5, 0),
        fontWeight: "normal"

    },
    size: {
        display: "flex",
        fontWeight: "bold",
        marginRight: theme.spacing(3),
        width: "100%",
        alignItems: "center",
        marginTop: theme.spacing(5)
    },
    sizeText: {
        fontSize: theme.spacing(3),
    },
    sizeVariant: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "normal",
        width: "80%",
    },
    sizeBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #E5E5E5",
        height: theme.spacing(3.7),
        width: "auto",
        marginLeft: theme.spacing(2),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
        padding: theme.spacing(0, 1)
    },
    inputBox:{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid #E5E5E5",
        height: theme.spacing(3.5),
        width: theme.spacing(5),
        fontSize: theme.spacing(2.5),
        '&:focus':{
            outline: "none"
        },
        '&[type=number]': {
            '-moz-appearance': 'textfield',
        },
        '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
    },
    selected: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #85C645",
        height: theme.spacing(3.7),
        width: "auto",
        marginLeft: theme.spacing(2),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
        padding: theme.spacing(0, 1)
    },
    quantity: {
        display: "flex",
        fontWeight: "bold",
        marginRight: theme.spacing(3),
        width: "100%",
        alignItems: "center",
        marginTop: theme.spacing(2)
    },
    quantitySpiner: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "normal",
        width: "75%",
    },
    quantityBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E5E5E5",
        height: theme.spacing(3.7),
        width: theme.spacing(5),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
    },
    subtotal: {
        fontSize: theme.spacing(3),
        color: theme.palette.primary.main,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        width: "75%",
        alignItems: "center"
    },
    button: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
        width: theme.spacing(18),
        height: theme.spacing(5),
        border: "2px solid #85C645",
        borderRadius: theme.spacing(3),
        fontFamily: "Open Sans",
        marginTop: theme.spacing(5),
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        }
    }
}));
