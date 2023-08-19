import {Box, useTheme} from "@mui/material";
import {ColorModeContext} from "@/pages/_app";
import {useContext} from "react";
import {ColorModeSwitcher} from "@/components/ColorModeSwitcher/ColorModeSwitcher";

export const ColorModeSwitcherContained = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <ColorModeSwitcher/>
        </Box>
    );
};
