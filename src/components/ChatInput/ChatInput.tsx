import {Divider, IconButton, InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {pt3, pt4} from "@/utils/styleVariables";

export const ChatInput = () => {
    return (
        <form style={{display: 'flex',
            alignItems: 'center',
            gap: pt3,
            marginBottom: pt4,
            paddingLeft: pt4,
            justifySelf: 'end',}}>
            <InputBase multiline maxRows={8} fullWidth/>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{p: '10px'}} aria-label="send">
                <SendIcon/>
            </IconButton>
        </form>
    );
};
