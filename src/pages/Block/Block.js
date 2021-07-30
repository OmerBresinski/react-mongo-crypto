import React, { useState, useEffect } from "react";
import axios from "axios";
import Text from "components/Text";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const Block = () => {
  const [block, setBlock] = useState();
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    fetchBlock();
  }, []);

  const fetchBlock = async () => {
    const response = await axios.get("http://localhost:4000/block");
    if (response.data) {
      setBlock(response.data[0]);
    }
  };

  return (
    <S.Block>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Block
          </Text>
        </S.Header>
        <BlockForm isDirty={isDirty} setIsDirty={setIsDirty} block={block} />
      </S.Content>
    </S.Block>
  );
};

export default Block;
