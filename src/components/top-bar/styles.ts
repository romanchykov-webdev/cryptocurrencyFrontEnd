import {makeStyles} from "@mui/styles";
import {Theme} from '@mui/material'
import {tokens} from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
            const colors = tokens(theme.palette.mode)
            return {
                root: {
                    position: 'static',
                    background: `${colors.primary.DEFAULT} !important`,
                    borderBottom: `1px solid ${colors.borderColor}`,
                    boxShadow: 'none !important'
                },
                menuIcon: {
                    cursor: 'pointer',
                    marginRight: '10px',

                },
                toolbar: {
                    justifyContent: 'space-between',
                    padding: '25px 45px',
                },
                iconBlock: {
                    paddingRight: '37px',
                    borderRight: `1px solid ${colors.borderColor}`,
                    // paddingTop: '10px',
                    display: 'flex',
                    alignItems: 'center'
                },
                searchIcon: {
                    '&:hover': {
                        'backgroundColor': 'transparent !important'
                    }
                },
                themeIcon: {
                    marginRight: '45px'
                },
                searchBlock: {
                    display: 'flex',
                    backgroundColor: `${colors.primary[600]}`,
                    borderRadius: '8px',
                    marginLeft: '28px',
                    maxHeight: '45px',
                },
                searchInput: {
                    padding: '18px 12px'
                }
            }
        }
    )
;