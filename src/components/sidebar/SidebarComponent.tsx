import React, {useEffect, useState} from 'react';
import {useStyles} from "./style";
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme, Avatar
} from "@mui/material"

//import icons
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
    LogoutOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between/FlexBetween";
import {navMenu} from "../../common/moks/navigate"

//logo
import Logo from "../../assets/images/sidebar/logo.svg"


const SidebarComponent = (props: any) => {
    const [active, setActive] = useState<string>()
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()

    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])


    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id}>
                <ListItemButton
                    onClick={() => navigate(`${element.path}`)}
                    className={classes.navItem}
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
                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <ListItem>
                            <ListItemButton className={classes.navItem}>
                                <ListItemIcon>
                                    <LogoutOutlined/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>
                                        LogOut
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;