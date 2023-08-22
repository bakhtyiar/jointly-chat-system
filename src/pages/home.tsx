import React, {useEffect} from 'react';
import PromoLayout from "@/components/PromoLayout/PromoLayout";
import {routes} from "@/utils/routes";
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  align-items: center;
`

const Home = () => {
    const {replace} = useRouter();
    useEffect(() => {
        replace(routes.index.path);
    })
    return (
        <>
            <PromoLayout>
                <StyledMain>
                    <CircularProgress color="primary" variant="indeterminate"/>
                </StyledMain>
            </PromoLayout>
        </>
    );
};

export default Home;