import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    allCategoryStyle: {
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.spacing(0, 0, 0, 0),
        width: theme.spacing(30),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginLeft: theme.spacing(3)
    },
    navContainer: {
        display: 'flex',
        width: '100%',
        height: theme.spacing(6.5),
        fontFamily: theme.fontFamily.main,
        fontSize: theme.spacing(2.5),
        justifyContent: 'center',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    searchInput: {
        border: 0,
        outline: 0,
        width: theme.spacing(50),
        fontSize: theme.spacing(2)
    },
    searchButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        height: '100%',
        width: theme.spacing(16),
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconBetween: {
        display: 'flex',
        alignItems: 'center',
        color: '#CECECE',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        fontSize: theme.spacing(2)
    },
    categoryAndSearchContainer: {
        border: '1px solid #CECECE',
        display: "flex",

    }
}))

export default useStyles;
