import React from 'react';
import {Button} from "@mui/material";
import Link from "next/link";
import {routes} from "@/utils/routes";
import styled from "@emotion/styled";
import {pt2, pt3, pt6} from "@/utils/styleVariables";
import {ColorModeSwitcher} from "@/components/ColorModeSwitcher/ColorModeSwitcher";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: ${pt6};
`
const StyledBrandName = styled(Link)`
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  padding: ${pt3};
  transition-duration: 250ms;
  border-radius: ${pt3};
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${pt6};
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const StyledButtons = styled.div`
  display: flex;
  gap: ${pt2};
  align-items: center;
`

const PromoHeader = () => {
    return (
        <StyledHeader>
            <StyledBrandName href={routes.index.path}>Jointly</StyledBrandName>
            <StyledList>
                <li><StyledLink href={routes.communities.path}>Communities</StyledLink></li>
                <li><StyledLink href={routes.pricing.path}>Pricing</StyledLink></li>
            </StyledList>
            <StyledButtons>
                <Link href={routes.login.path}><Button variant="contained">Login</Button></Link>
                <Link href={routes.register.path}><Button variant="outlined">Register</Button></Link>
                <ColorModeSwitcher/>
            </StyledButtons>
        </StyledHeader>
    );
};

export default PromoHeader;