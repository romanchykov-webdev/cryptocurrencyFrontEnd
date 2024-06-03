import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme) => {
    const colors = tokens(theme.palette.mode)

    return {
        root: {
            flexGrow: 1,
            padding: '32px'
        },
        topCardItem: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            minHeight: 185,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize',
        },
        itemDetails: {
            display: "flex",
            height: "100%",
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '35px',
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '48px'
        },
        cardCapitalize: {
            color: `${colors.secondary.DEFAULT}`,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '21px'
        }

    }
})