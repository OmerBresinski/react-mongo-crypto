import React from "react";
import Text from "components/Text";
import BlockchainForm from "components/BlockchainForm";
import * as S from "./style";

const Tokens = () => {
  const transactions = [
    [
      { amount: 10, from: "Omer", to: "Guy" },
      { amount: 20, from: "James", to: "Abraham" },
      { amount: 30, from: "Rick", to: "Morty" },
    ],
    [
      { amount: 40, from: "Snow White", to: "Prince" },
      { amount: 50, from: "Brenner", to: "Max" },
    ],
  ];

  return (
    <S.Tokens>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Tokens
          </Text>
        </S.Header>
        <S.Blockchains>
          <BlockchainForm dataRows={5} transactions={transactions} />
          <BlockchainForm dataRows={5} />
          <BlockchainForm dataRows={5} />
        </S.Blockchains>
      </S.Content>
    </S.Tokens>
  );
};

export default Tokens;
