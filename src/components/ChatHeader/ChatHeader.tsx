import {Box, ButtonBase, IconButton, Typography, useTheme} from "@mui/material";
import {pt2, pt4, pt6} from "@/utils/styleVariables";
import CloseIcon from '@mui/icons-material/Close';

export const ChatHeader = ({handleDrawerOpen}) => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: pt4,
            borderRadius: 0,
        }} elevation={0}
        >
            <ButtonBase sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                width: 'fit-content',
                paddingTop: pt2,
                paddingRight: pt6,
                paddingBottom: pt2,
                paddingLeft: pt4,
                borderRadius: pt2,
                overflowX: 'hidden',
                transition: '0.3s',
                '&:hover': {
                    backgroundColor: theme.palette["bgc"].dimmed,
                },
            }} onClick={handleDrawerOpen}
            >
                <Typography variant="subtitle1">Chatname</Typography>
                <Typography variant="caption">77 users</Typography>
            </ButtonBase>
            <IconButton><CloseIcon/></IconButton>
        </Box>
    );
};
