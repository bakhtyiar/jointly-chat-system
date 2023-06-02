import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {inter} from "@/utils/fonts";
import styles from "@/styles/_app.module.scss"
import {CssBaseline} from "@mui/material";
import { SessionProvider } from "next-auth/react"

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return <div className={inter.className + " " + styles["content-wrapper"]}>
        <CssBaseline/>
        <SessionProvider session={session}>
        <Component {...pageProps}/>
        </SessionProvider>
    </div>
}
