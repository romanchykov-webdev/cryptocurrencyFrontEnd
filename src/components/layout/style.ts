import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%'
    },
    mainSection: {
        display: "flex",
        flexGrow: 1,
        // width: '90%',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})