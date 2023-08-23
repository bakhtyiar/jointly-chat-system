import React, {ReactNode} from 'react';
import AppHeader from "@/components/AppHeader/AppHeader";
import AppFooter from "@/components/AppFooter/AppFooter";
import styled from "@emotion/styled";
import {Grid} from "@mui/material";

const StyledLayout = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  height: 100vh;
  overflow-y: hidden;
`

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <StyledLayout container spacing={2}>
            <Grid item sx={{height: '100vh'}}><AppHeader/></Grid>
            <Grid item sx={{height: '90vh'}} xs={10}>{children}</Grid>
        </StyledLayout>
    );
};

export default AppLayout;