import React from 'react';
import {pt6} from "@/utils/styleVariables";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: ${pt6};
  flex: 0 0 auto;
`

const AppFooter = () => {
    return (
        <StyledFooter>
            <p>© 2023 No Rights Reserved. </p>
        </StyledFooter>
    );
};

export default AppFooter;