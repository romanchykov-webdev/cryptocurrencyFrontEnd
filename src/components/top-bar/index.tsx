import React, {FC, useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
//import icons
// import LightModeIcon from "@mui/icons-material/LightMode"
// import DarkModeIcon from "@mui/icons-material/DarkMode"
// import SearchIcon from "@mui/icons-material/Search"
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import {NotificationsNone, Search, DarkMode, LightMode, MenuOutlined} from "@mui/icons-material"

import {useStyles} from "./styles";
import FlexBetween from "../flex-between/FlexBetween";
import {ITopBarProps} from "../../common/types/topbar";


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen} = props
    // const user = useAppSelector((state) => state.auth.user)
    // console.log(user)
    // console.log(user.user.firstName)
    const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    //get firstName
    const firstNameUser=sessionStorage.getItem("firstName")
    //get firstName end
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant='h3'>
                        welcome {firstNameUser}
                    </Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid
                        className={classes.iconBlock}
                        onClick={colorMode.toggleColorMode}>
                        <IconButton className={classes.themeIcon}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                    </Grid>

                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput}
                                   placeholder='Поиск'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>

        // <Box className={classes.root}>
        //     <Grid>
        //         welcome serioga
        //     </Grid>
        //     <Box display='flex'>
        //         <Grid
        //             className={classes.iconBlock}
        //             onClick={colorMode.toggleColorMode}>
        //             <IconButton className={classes.themeIcon}>
        //                 {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNoneIcon/>
        //             </IconButton>
        //         </Grid>
        //
        //         <Grid className={classes.searchBlock}>
        //             <IconButton className={classes.searchIcon}>
        //                 <SearchIcon/>
        //             </IconButton>
        //             <InputBase className={classes.searchInput}
        //                        placeholder='Поиск'/>
        //         </Grid>
        //     </Box>
        //
        //
        // </Box>
    );
};

export default TopBarComponent;