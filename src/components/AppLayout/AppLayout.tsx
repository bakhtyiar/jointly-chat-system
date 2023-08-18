import React from 'react';
import AppHeader from "@/components/AppHeader/AppHeader";
import AppFooter from "@/components/AppFooter/AppFooter";

const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader></AppHeader>
            {children}
            <AppFooter></AppFooter>
        </>
    );
};

export default AppLayout;