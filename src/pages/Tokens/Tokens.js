import React from "react";
import Text from "components/Text";
import BlockchainForm from "components/BlockchainForm";
import * as S from "./style";

const Tokens = () => {
  return (
    <S.Tokens>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Tokens
          </Text>
        </S.Header>
        <S.Blockchains>
          <BlockchainForm dataRows={5} withTransactions />
          <BlockchainForm dataRows={5} withTransactions />
          <BlockchainForm dataRows={5} withTransactions />
        </S.Blockchains>
      </S.Content>
    </S.Tokens>
  );
};

export default Tokens;
