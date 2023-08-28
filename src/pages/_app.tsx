import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {SessionProvider} from "next-auth/react"
import {createContext, useMemo, useState} from "react";
//todo: optimize mui icons package (try to use lazy load or treeshaking idk)
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
                    bgc: {
                        dimmed: mode === 'light' ? grey[100] : grey[900],
                        contrast: mode === 'light' ? grey[200] : grey[800],
                    }
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: `
                        *::-webkit-scrollbar {
                            width: 4px;
                        }

                        *::-webkit-scrollbar-track {
                            background-color: ${mode === 'light' ? grey[200] : grey[800]};
                        }

                        *::-webkit-scrollbar-thumb {
                            background-color: ${mode === 'light' ? grey[500] : grey[600]};
                            border-radius: 3px;
                        }
                      `,
                    },
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
