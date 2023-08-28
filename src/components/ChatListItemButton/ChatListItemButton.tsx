import {ListItemButton, ListItemText, Typography} from "@mui/material";

interface Props {
    name: string,
    isUnread? : boolean,
}

export const ChatListItemButton = ({name, isUnread}: Props) => {
    return (
        <ListItemButton component="a" href="">
            <ListItemText disableTypography primary={<Typography variant="body2" style={{ fontWeight: isUnread ? 'bold' : 'normal' }}>{name}</Typography>}/>
        </ListItemButton>
    );
};
