import React from 'react';
import PromoFooter from "@/components/PromoFooter/PromoFooter";
import PromoHeader from "@/components/PromoHeader/PromoHeader";

const PromoLayout = ({ children }) => {
    return (
        <>
            <PromoHeader></PromoHeader>
            {children}
            <PromoFooter></PromoFooter>
        </>
    );
};

export default PromoLayout;