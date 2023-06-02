import React from 'react';
import {inter} from "@/utils/fonts";
import styles from '@/styles/404.module.scss'

const PageNotFound
= () => {
    return (
        <main  style={inter.style}>
           <div className={styles['content-wrapper']}>
               <h1>404</h1>
               <p>Page not found.</p>
           </div>
        </main>
    );
};

export default PageNotFound;