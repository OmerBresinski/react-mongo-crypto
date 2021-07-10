import React from "react";
import Text from "components/Text";
import BlockchainForm from "components/BlockchainForm";
import * as S from "./style";

const Blockchain = () => {
  return (
    <S.Blockchain>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Blockchain
          </Text>
        </S.Header>
        <BlockchainForm dataRows={12} />
      </S.Content>
    </S.Blockchain>
  );
};

export default Blockchain;
