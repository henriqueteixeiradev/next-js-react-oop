import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    overflow-y: auto;
    height: 100vh;
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    padding: 15px;
  `}
`;

export const ProductItem = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `}
`;

export const ProductCol = styled.div`
  ${({ theme }) => css`
    padding: 15px;
  `}
`;

export const LabelPrice = styled.div`
  ${({ theme }) => css`
    color: blue;
  `}
`;
export const ContentList = styled.div`
  ${({ theme }) => css`
    background-color: #f9f9f9;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  `}
`;
