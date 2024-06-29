import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme";
import {Theme} from "@mui/material";


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            padding: 32,
            '& a': {
                textDecoration: 'none',
                color: `${
                    theme.palette.mode === 'light'
                        ? colors.black.DEFAULT
                        : colors.white.DEFAULT
                }`
            }
        },
        blockTitle: {
            textAlign: 'center',
            marginBottom: 32
        },
        newBlock: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            '& .MuiPaper-root': {
                backgroundColor: 'transparent !important',
                boxShadow: 'none !important',
                backgroundImage: 'none !important'
            },
        },
        imageBlock: {
            padding: '0 10px',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }
        },
        newsTitle: {
            marginBottom: 32,
        },
        readMore: {
            textAlign: 'center'
        },

    }
})