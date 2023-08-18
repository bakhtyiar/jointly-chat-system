import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {SessionProvider} from "next-auth/react"
import {createContext, useMemo, useState} from "react";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <SessionProvider session={session}>
                    <Component {...pageProps}/>
                </SessionProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
