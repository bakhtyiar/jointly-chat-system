import React from 'react';
import {Button} from "@mui/material";
import Link from "next/link";
import {routes} from "@/utils/routes";
import styled from "@emotion/styled";
import {pt2, pt6} from "@/utils/styleVariables";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: ${pt6};
`
const StyledBrandName = styled.span`
  font-weight: 700;
  color: black;
`

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${pt6};
`

const StyledLink = styled.li`
  color: black;
`

const StyledButtons = styled.div`
  display: flex;
  gap: ${pt2};
  align-items: center;
`

const AppHeader = () => {
    return (
        <StyledHeader>
            <Link href={routes.index.path}><StyledBrandName>Jointly</StyledBrandName></Link>
            <StyledLinks>
                <StyledLink><Link href={routes.communities.path}>Communities</Link></StyledLink>
                <StyledLink><Link href={routes.pricing.path}>Pricing</Link></StyledLink>
            </StyledLinks>
            <StyledButtons>
                <Link href={routes.login.path}><Button variant="contained">Login</Button></Link>
                <Link href={routes.register.path}><Button variant="outlined">Register</Button></Link>
            </StyledButtons>
        </StyledHeader>
    );
};

export default AppHeader;