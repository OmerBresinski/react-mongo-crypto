import React from "react";
import Text from "components/Text";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const Block = () => {
  return (
    <S.Blockchain>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Blockchain
          </Text>
        </S.Header>
        <BlockForm />
      </S.Content>
    </S.Blockchain>
  );
};

export default Block;
