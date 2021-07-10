import React, { useState, useCallback } from "react";
import Text from "components/Text";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const Distributed = () => {
  const [isDirty, setIsDirty] = useState(false);
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleHashChange = useCallback((hash, index) => {
    if (index != blocks.length - 1) {
      setBlocks((blocks) => {
        const tmpBlocks = [...blocks];
        tmpBlocks[index + 1] = { previousHash: hash };
        return tmpBlocks;
      });
    }
  }, []);

  console.log("distributed");

  return (
    <S.Distributed>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Distributed
          </Text>
        </S.Header>
        {/* <S.Blocks>
          {blocks.map(({ previousHash }, index) => {
            return (
              <BlockForm
                key={index}
                previousHash={previousHash}
                onHash={handleHashChange}
                index={index}
                width="325px"
                isDirty={isDirty}
                setIsDirty={setIsDirty}
              />
            );
          })}
        </S.Blocks> */}
      </S.Content>
    </S.Distributed>
  );
};

const initialBlocks = [
  { previousHash: "0000000000000000000000000000000000000000000000000000000000000000" },
  { previousHash: " " },
  { previousHash: " " },
  { previousHash: " " },
  { previousHash: " " },
];

export default Distributed;
