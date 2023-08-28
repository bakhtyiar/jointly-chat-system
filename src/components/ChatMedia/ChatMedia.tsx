import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography,
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    justifyContent: 'flex-start',
}));
//todo : edit content of component, add grid of images, audios? , etc.
export const ChatMedia = ({handleDrawerClose, isOpen}) => {
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
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
