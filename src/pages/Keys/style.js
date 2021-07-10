import styled from "styled-components";

export const Keys = styled.div`
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

export const KeyPair = styled.div`
  display: flex;
  margin-block-start: 50px;
  flex-direction: column;
  gap: 15px;
  width: 600px;
`;

export const PrivateKey = styled.div`
  display: flex;
  gap: 10px;
`;

export const PublicKey = styled.div``;
