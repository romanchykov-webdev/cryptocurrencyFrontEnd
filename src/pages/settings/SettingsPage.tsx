import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Grid, Tabs, useTheme} from "@mui/material";
import TabPanel from "../../components/tab-panel/TabPanel";
import {tabProps} from "../../utils/helpers";
import {tokens} from "../../theme";
import {useStyles} from "./style";
import SettingsPersonalInfoComponent from "../../components/settings-personal-info/SettingsPersonalInfoComponent";
import {useAppDispatch} from "../../utils/hook";
import {getPublicUser} from "../../store/thunks/auth";


const SettingsPage = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(0);
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {

        dispatch(getPublicUser())
    }, [dispatch]);
    return (
        <Grid className={classes.root}>
            <Box className={classes.tabsWrapper}>


                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Seting tabs"
                    centered
                    textColor="secondary"
                    // indicatorColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.blue
                        },
                    }}
                >
                    < Tab label="Персональные данные" {...tabProps(0)}/>
                    <Tab label="Измкнить пароль" {...tabProps(1)}/>
                    <Tab label="Удалить акаунт" {...tabProps(2)}/>
                </Tabs>

                <TabPanel value={value} index={0}>
                    <SettingsPersonalInfoComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>

            </Box>
        </Grid>
    )
        ;
};

export default SettingsPage;