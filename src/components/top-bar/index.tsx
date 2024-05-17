import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext, tokens} from "../../theme";
//import icons
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import {useStyles} from "./styles";


const TopBarComponent = () => {
    const {user} = useAppSelector((state) => state.auth.user)
    // console.log(user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            px='32px'
            pt='24px'
        >

            <Grid>
                welcome {user.firstName}
            </Grid>
            <Box display='flex' alignItems='center'
            >
                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton sx={{mr: '45px'}}>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>

                </Grid>
                <Grid sx={{
                    pr: '37px',
                    borderRight: `1px solid ${colors.gray.DEFAULT}`
                }}>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary[600]}`,
                        borderRadius: '8px',
                        ml: '28px'
                    }}>
                    <IconButton className={classes.root}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase
                        sx={{
                            px: '18px',
                            py: '12px'
                        }}
                        placeholder='Поиск'/>
                </Grid>
            </Box>


        </Box>
    );
};

export default TopBarComponent;