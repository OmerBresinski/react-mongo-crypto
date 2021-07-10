import React from "react";
import Text from "components/Text";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const Block = () => {
  return (
    <S.Block>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Block
          </Text>
        </S.Header>
        <BlockForm />
      </S.Content>
    </S.Block>
  );
};

export default Block;
