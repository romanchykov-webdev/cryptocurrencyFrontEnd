import React, {FC} from 'react';
import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";

import { MenuOutlined} from "@mui/icons-material"

import {useStyles} from "./style";
import FlexBetween from "../flex-between/FlexBetween";
import {ITopBarProps} from "../../common/types/topbar";
import ThemeSwitcherComponent from "../theme-switcher/ThemeSwitcherComponent";
import SearchBarComponent from "../search-bar/SearchBarComponent";


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen, isNonMobile} = props

    const classes = useStyles()

    //get firstName
    const firstNameUser = sessionStorage.getItem("firstName")
    //get firstName end
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                            <Typography variant='h3'>
                                welcome {firstNameUser}
                            </Typography>
                        </FlexBetween>
                    </Grid>

                    {
                        isNonMobile && (
                            <Grid display='flex' justifyContent='flex-end' item sm={9} lg={9}>
                                <Box borderRight='1px solid #3C3C3C'>
                                <ThemeSwitcherComponent/>
                                </Box>
                                <Box marginLeft='28px'>
                                    <SearchBarComponent/>
                                </Box>
                            </Grid>
                        )
                    }


                </Grid>
            </Toolbar>
        </AppBar>


    );
};

export default TopBarComponent;