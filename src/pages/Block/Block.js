import React, { useState } from "react";
import Text from "components/Text";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const BlockChain = () => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <S.Block>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Block
          </Text>
        </S.Header>
        <BlockForm isDirty={isDirty} setIsDirty={setIsDirty} />
      </S.Content>
    </S.Block>
  );
};

export default BlockChain;
