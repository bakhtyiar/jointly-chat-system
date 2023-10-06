import {ListItemButton, ListItemText, Typography} from "@mui/material";

interface Props {
    name: string,
    isUnread? : boolean,
    handleChatOpen?: Function,
}

export const ChatListItemButton = ({name, isUnread, handleChatOpen}: Props) => {
    return (
        <ListItemButton onClick={handleChatOpen}>
            <ListItemText disableTypography primary={<Typography variant="body2" style={{ fontWeight: isUnread ? 'bold' : 'normal' }}>{name}</Typography>}/>
        </ListItemButton>
    );
};
