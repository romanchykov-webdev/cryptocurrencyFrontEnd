import React, {FC, useEffect, useState} from 'react';
import {useStyles} from "./style";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Avatar,
} from "@mui/material"


import {
    LogoutOutlined,
    ChevronLeftOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between/FlexBetween";
import {navMenu} from "../../common/moks/navigate"

//logo
import Logo from "../../assets/images/sidebar/logo.svg"
import {ISidebarProps} from "../../common/types/sidebar";
import ThemeSwitcherComponent from "../theme-switcher/ThemeSwitcherComponent";
import SearchBarComponent from "../search-bar/SearchBarComponent";


const SidebarComponent: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
    const [active, setActive] = useState<string>()
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()

    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])


    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id}>
                <ListItemButton
                    onClick={() => navigate(`${element.path}`)}
                    // className={classes.navItem}
                    className={active === element.path ? `${classes.navItem} ${classes.active}` : `${classes.navItem}`}
                >
                    <ListItemIcon>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1">
                            {element.name}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    function handleLogOut(){
        console.log('logout')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('firstName')
        navigate('/login')
    }

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            // color: 'red',
                            backgroundColor: theme.palette.primary.main,
                            // backgroundColor: '#fff',
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    {/*<img src={Logo} alt=""/>*/}
                                    <Avatar alt="Remy Sharp" src={Logo}/>
                                    <Typography
                                        className={classes.brandTitle}
                                        variant='h1'

                                    >
                                        Demo
                                    </Typography>
                                </Box>
                                {
                                    !isNonMobile && (
                                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                                            <ChevronLeftOutlined/>
                                        </IconButton>
                                    )
                                }
                            </FlexBetween>
                        </Box>
                        {
                            !isNonMobile && (
                                <List>
                                    <ListItem >
                                        <SearchBarComponent />
                                    </ListItem>
                                </List>
                            )
                        }

                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            {
                                !isNonMobile && (
                                    <ListItem>
                                        <Box padding='5px'>
                                            <ThemeSwitcherComponent/>
                                        </Box>
                                    </ListItem>
                                )
                            }
                            <ListItem>
                                <ListItemButton className={classes.navItem} onClick={handleLogOut}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography >
                                            LogOut
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;