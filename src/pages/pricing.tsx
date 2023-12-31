import styled from "@emotion/styled";
import Head from 'next/head'
import PromoLayout from "@/components/PromoLayout/PromoLayout";
import React from "react";
import {PricingTable} from "@/components/PricingTable/PricingTable";

const StyledMain = styled.main`
  align-items: center;
`

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Jointly</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <PromoLayout>
                <StyledMain>
                    <h1>Pricing</h1>
                    <PricingTable/>
                </StyledMain>
            </PromoLayout>
        </>
    )
}
