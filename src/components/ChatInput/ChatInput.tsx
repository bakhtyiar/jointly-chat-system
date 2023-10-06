import {Divider, IconButton, InputBase} from "@mui/material";
import styled from "@emotion/styled";
import SendIcon from '@mui/icons-material/Send';
import {pt3} from "@/utils/styleVariables";

const StyledTextField = styled.form`
  display: flex;
  align-items: center;
  gap: ${pt3};
  margin: ${pt3};
  justify-self: end;
`

export const ChatInput = () => {
    return (
        <StyledTextField>
            <InputBase multiline maxRows={8} fullWidth/>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{p: '10px'}} aria-label="send">
                <SendIcon/>
            </IconButton>
        </StyledTextField>
    );
};
