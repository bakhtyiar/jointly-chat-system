import React, {ReactNode} from 'react';
import PromoFooter from "@/components/PromoFooter/PromoFooter";
import PromoHeader from "@/components/PromoHeader/PromoHeader";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const PromoLayout = ({ children }: Props) => {
    return (
        <>
            <PromoHeader></PromoHeader>
            {children}
            <PromoFooter></PromoFooter>
        </>
    );
};

export default PromoLayout;