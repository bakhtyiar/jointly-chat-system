import React from 'react';
import AppHeader from "@/components/AppHeader/AppHeader";
import styled from "@emotion/styled";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  height: 100vh;
  overflow: hidden;
`

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({children}) => {
    return (<StyledLayout>
            <AppHeader/>
            {children}
        </StyledLayout>
    );
};

export default AppLayout;