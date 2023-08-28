import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Tab, Tabs, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import {TabPanel} from "@/components/TabPanel/TabPanel";
import React from "react";
import {tabA11yProps} from "@/utils/a11y";


const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    justifyContent: 'flex-start',
}));
//todo : edit content of component, add grid of images, audios? , etc.
export const ChatMedia = ({handleDrawerClose, isOpen}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Drawer
            sx={{
                width: '240px',
                height: '100%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '240px',
                },
            }}
            variant="persistent"
            anchor="right"
            open={isOpen}
        >
            <DrawerHeader sx={{
                display: 'flex',
                justifyContent: 'end',
            }}>
                <Typography variant="subtitle1">Chat's documents</Typography>
                <IconButton onClick={handleDrawerClose}>
                    <CloseIcon/>
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="Chat's media" variant="scrollable"   scrollButtons="auto">
                    <Tab label="Photo & video" {...tabA11yProps(0)}/>
                    <Tab label="Audio" {...tabA11yProps(1)}/>
                    <Tab label="Files" {...tabA11yProps(2)}/>
                    <Tab label="Pinned messages" {...tabA11yProps(3)}/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <Divider/>
        </Drawer>
    );
};
