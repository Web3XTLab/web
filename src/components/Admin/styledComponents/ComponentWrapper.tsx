import styled from "styled-components";

export const ComponentWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #aaa;

  &:first-of-type {
    margin-top: 0;
    border-top: none;
  }
`;
