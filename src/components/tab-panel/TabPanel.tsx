import {TabPanelProps} from "../../common/types/tabs";
import Box from "@mui/material/Box";
import React from "react";

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}

        </div>
    )
}
export default TabPanel;