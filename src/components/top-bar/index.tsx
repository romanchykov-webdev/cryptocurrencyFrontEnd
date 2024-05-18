import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
//import icons
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import {useStyles} from "./styles";


const TopBarComponent = () => {
    const user = useAppSelector((state) => state.auth.user)
    // console.log(user)
    // console.log(user.user.firstName)
    const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Grid>
                welcome
            </Grid>
            <Box display='flex'>
                <Grid
                    className={classes.iconBlock}
                    onClick={colorMode.toggleColorMode}>
                    <IconButton className={classes.themeIcon}>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>

                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase className={classes.searchInput}
                               placeholder='Поиск'/>
                </Grid>
            </Box>


        </Box>
    );
};

export default TopBarComponent;