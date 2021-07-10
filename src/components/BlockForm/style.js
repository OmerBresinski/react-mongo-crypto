import styled from "styled-components";

export const BlockForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: 20px;
  gap: 10px;
  max-width: ${({ width }) => width};
  min-width: 250px;
  width: 100%;
`;
