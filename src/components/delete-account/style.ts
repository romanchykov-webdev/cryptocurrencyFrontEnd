import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme";
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme:Theme)=>{

  const colors=tokens(theme.palette.mode)
    return{
        root: {
            // padding: 32
        },
        tabHeading: {
            width: "100%",
            textAlign: 'center',
            marginBottom: '32px !important',
        },
        alertMessage: {
            width: '100%',
            textAlign: 'left',
            marginBottom: '32px !important',
        },
        checkBoxBlock:{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems:'center'
        },
        checkbox: {
            color: `${colors.blue} !important`,
            '&.Mui-checked': {
                color: `${colors.blue} !important`,
            }
        },
        blockButton:{
            display: "flex",
            width: '100%',
            justifyContent: "flex-end",
            alignItems: "center",
        }

    }

})