import React, { useState, useCallback } from "react";
import BlockForm from "components/BlockForm";
import * as S from "./style";

const BlockchainForm = ({ dataRows }) => {
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

  return (
    <S.BlockchainForm>
      {blocks.map(({ previousHash }, index) => {
        return (
          <BlockForm
            key={index}
            previousHash={previousHash}
            onHash={handleHashChange}
            index={index}
            width="325px"
            dataRows={dataRows}
            isDirty={isDirty}
            setIsDirty={setIsDirty}
          />
        );
      })}
    </S.BlockchainForm>
  );
};

const initialBlocks = [
  { previousHash: "0000000000000000000000000000000000000000000000000000000000000000" },
  { previousHash: " " },
  { previousHash: " " },
  { previousHash: " " },
  { previousHash: " " },
];

export default BlockchainForm;
