import React from 'react';
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const PromoLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};

export default PromoLayout;