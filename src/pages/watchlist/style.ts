import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            padding: '10px 20px'
        },
        watchlistHeading: {
            textAlign: 'center'
        },
        heading: {
            margin: '25px 0 !important',
        },
        assetsTableBlock: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            marginBottom:32,
            // maxHeight:270,
            border:`1px solid ${colors.borderColor}`,
            borderRadius:12,
            // '& MuiPaper-root':{
            //     backgroundColor: 'transparent !important',
            //     boxSizing: 'none !important',
            //     backgroundImage:'none !important'
            // }
        }
    }
})

