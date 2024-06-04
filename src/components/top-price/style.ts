import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles({
    priceUp: {
        color: '#A9FFA7 !important',
    },
    priceDown: {
        color: '#FFA7A7 !important',
    },
    button: {
        margin: '0 !important',
        padding: '0 !important',
        minWidth: '0 !important',
    },
    rowUpDown: {
        marginLeft: 10,
        position: 'relative',
        transition: '1s !important',
        color:'white'
    },
    rowDown: {
        transform: 'rotate(180deg)'
    }
})