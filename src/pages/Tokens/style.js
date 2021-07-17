import styled from "styled-components";

export const Tokens = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  width: calc(100vw - 400px);
  padding: 0px 25px 25px;
  overflow-x: auto;
  box-sizing: border-box;
`;

export const Blockchains = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
