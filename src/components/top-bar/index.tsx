import React, {FC, useEffect} from 'react';
import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";

import {MenuOutlined} from "@mui/icons-material"

import {useStyles} from "./style";
import FlexBetween from "../flex-between/FlexBetween";
import {ITopBarProps} from "../../common/types/topbar";
import ThemeSwitcherComponent from "../theme-switcher/ThemeSwitcherComponent";
import SearchBarComponent from "../search-bar/SearchBarComponent";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getPublicUser} from "../../store/thunks/auth";


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen, isNonMobile} = props

    const classes = useStyles()
    const dispatch = useAppDispatch()

    // get user data
    useEffect(() => {
        dispatch(getPublicUser())
    }, [dispatch]);
    //get firstName
    // const firstNameUser = sessionStorage.getItem("firstName")

    // const firstNameUser = useAppSelector(state => state.auth.user.user?.firstName)
    const {user} = useAppSelector(state => state.auth.user)
    //
    // console.log(firstNameUser)
    //get firstName end
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                            <Typography variant='h3'>
                                {/*{`welcome ${firstNameUser ? firstNameUser : ''}`}*/}
                                {`welcome ${user.firstName}`}
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