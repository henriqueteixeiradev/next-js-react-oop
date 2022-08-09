import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100%;
    min-height: 100vh;
  `}
`;
