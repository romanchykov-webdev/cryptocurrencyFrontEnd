import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles((theme: Theme) => {
    // const colors = tokens(theme.palette.mode)

    return {
        root: {
            paddingRight: '37px',
            // borderRight: `1px solid ${colors.borderColor}`,
            // paddingTop: '10px',
            display: 'flex',
            alignItems: 'center'
        },
        themeIcon: {
            marginRight: '45px'
        },
    }
})