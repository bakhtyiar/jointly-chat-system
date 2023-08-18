import React from 'react';
import {inter} from "@/utils/fonts";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const PageNotFound
= () => {
    return (
        <main  style={inter.style}>
           <StyledWrapper>
               <h1>404</h1>
               <p>Page not found.</p>
           </StyledWrapper>
        </main>
    );
};

export default PageNotFound;