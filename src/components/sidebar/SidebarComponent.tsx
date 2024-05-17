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
    useTheme
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
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between/FlexBetween";


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
                        '&.MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>
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
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;