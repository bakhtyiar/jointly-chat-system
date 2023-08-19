import {Box, IconButton, useTheme} from "@mui/material";
import {ColorModeContext} from "@/pages/_app";
import {useContext} from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeSwitcher = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
    );
};
