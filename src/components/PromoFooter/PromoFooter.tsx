import React from 'react';
import styled from "@emotion/styled";
import {pt6} from "@/utils/styleVariables";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: ${pt6};
  flex: 0 0 auto;
`

const PromoFooter = () => {
    return (
        <StyledFooter>
            <p>© 2023 No Rights Reserved. </p>
        </StyledFooter>
    );
};

export default PromoFooter;