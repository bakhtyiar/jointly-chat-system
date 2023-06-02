import React from 'react';
import styles from './header.module.scss'
import {Button} from "@mui/material";
import Link from "next/link";
import {routes} from "@/utils/routes";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <Link href={routes.index.path}><span className={styles["brand-name"]}>Jointly</span></Link>
            <ul className={styles["links"]}>
                <li><Link href={routes.communities.path} className={styles["link"]}>Communities</Link></li>
                <li><Link href={routes.pricing.path} className={styles["link"]}>Pricing</Link></li>
            </ul>
            <div className={styles["buttons"]}>
                <Link href={routes.login.path}><Button variant="contained">Login</Button></Link>
                <Link href={routes.register.path}><Button variant="outlined">Register</Button></Link>
            </div>
        </header>
    );
};

export default Header;