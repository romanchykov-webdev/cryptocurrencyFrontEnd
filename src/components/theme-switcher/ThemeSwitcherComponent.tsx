import React, {FC, useContext} from 'react';
import {Grid, IconButton, useTheme} from "@mui/material";
import {DarkMode, LightMode, NotificationsNone} from "@mui/icons-material";

import {ColorModeContext} from "../../theme";
import {useStyles} from './style'

const ThemeSwitcherComponent: FC = (): JSX.Element => {
    const theme = useTheme()
    const classes = useStyles()
    const colorMode: any = useContext(ColorModeContext)
    return (
        <Grid
            className={classes.root}
            onClick={colorMode.toggleColorMode}>
            <IconButton
                className={classes.themeIcon}
            >
                {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
            </IconButton>
            <IconButton>
                <NotificationsNone/>
            </IconButton>
        </Grid>
    );
};

export default ThemeSwitcherComponent;