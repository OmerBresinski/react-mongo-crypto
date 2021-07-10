import React from "react";
import Text from "components/Text";
import BlockchainForm from "components/BlockchainForm";
import * as S from "./style";

const Distributed = () => {
  return (
    <S.Distributed>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Distributed
          </Text>
        </S.Header>
        <S.Blockchains>
          <BlockchainForm dataRows={5} />
          <BlockchainForm dataRows={5} />
          <BlockchainForm dataRows={5} />
        </S.Blockchains>
      </S.Content>
    </S.Distributed>
  );
};

export default Distributed;
