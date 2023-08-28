import {ButtonBase, IconButton, Paper, Typography, useTheme} from "@mui/material";
import {pt2, pt4} from "@/utils/styleVariables";
import CloseIcon from '@mui/icons-material/Close';

export const ChatHeader = ({handleDrawerOpen}) => {
    const theme = useTheme();
    return (
        <Paper sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: pt4,
            borderRadius: 0,
        }} elevation={0}
               onClick={handleDrawerOpen}
        >
            <ButtonBase sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                width: '100%',
                marginRight: pt4,
                padding: `${pt2} ${pt4}`,
                borderRadius: pt2,
                transition: '0.3s',
                '&:hover': {
                    backgroundColor: theme.palette.bgc.dimmed,
                },
            }}
            >
                <Typography variant="subtitle1">Chatname</Typography>
                <Typography variant="caption">77 users</Typography>
            </ButtonBase>
            <IconButton><CloseIcon/></IconButton>
        </Paper>
    );
};
