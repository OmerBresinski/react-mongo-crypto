import React from "react";
import Text from "components/Text";
import BlockchainForm from "components/BlockchainForm";
import * as S from "./style";

const Coinbase = () => {
  return (
    <S.Coinbase>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Coinbase
          </Text>
        </S.Header>
        <S.Blockchains>
          <BlockchainForm
            dataRows={5}
            transactions={transactions1}
            coinbase={coinbase[0]}
          />
          <BlockchainForm
            dataRows={5}
            transactions={transactions2}
            coinbase={coinbase[1]}
          />
          <BlockchainForm
            dataRows={5}
            transactions={transactions3}
            coinbase={coinbase[2]}
          />
        </S.Blockchains>
      </S.Content>
    </S.Coinbase>
  );
};

export default Coinbase;

const coinbase = [
  [{ amount: 100, to: "Bill" }],
  [{ amount: 100, to: "Bill" }],
  [{ amount: 100, to: "Bill" }],
];

const transactions1 = [
  [
    { amount: 10, from: "Omer", to: "Guy" },
    { amount: 20, from: "James", to: "Abraham" },
    { amount: 30, from: "Rick", to: "Morty" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
    { amount: 70, from: "Max", to: "Maxine" },
  ],
  [
    { amount: 120, from: "David", to: "Hasseloff" },
    { amount: 420, from: "Britney", to: "Spears" },
    { amount: 69, from: "David", to: "Goliath" },
  ],
  [
    { amount: 40, from: "Jack", to: "Jackie" },
    { amount: 50, from: "Chan", to: "Rocky" },
    { amount: 60, from: "Dave", to: "Jinny" },
  ],
  [
    { amount: 10, from: "Harry", to: "Potter" },
    { amount: 20, from: "Ron", to: "Weasly" },
    { amount: 30, from: "Hermoine", to: "Granger" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
  ],
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

const transactions2 = [
  [
    { amount: 10, from: "Omer", to: "Guy" },
    { amount: 20, from: "James", to: "Abraham" },
    { amount: 30, from: "Rick", to: "Morty" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
    { amount: 70, from: "Max", to: "Maxine" },
  ],
  [
    { amount: 120, from: "David", to: "Hasseloff" },
    { amount: 420, from: "Britney", to: "Spears" },
    { amount: 69, from: "David", to: "Goliath" },
  ],
  [
    { amount: 40, from: "Jack", to: "Jackie" },
    { amount: 50, from: "Chan", to: "Rocky" },
    { amount: 60, from: "Dave", to: "Jinny" },
  ],
  [
    { amount: 10, from: "Harry", to: "Potter" },
    { amount: 20, from: "Ron", to: "Weasly" },
    { amount: 30, from: "Hermoine", to: "Granger" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
  ],
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

const transactions3 = [
  [
    { amount: 10, from: "Omer", to: "Guy" },
    { amount: 20, from: "James", to: "Abraham" },
    { amount: 30, from: "Rick", to: "Morty" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
    { amount: 70, from: "Max", to: "Maxine" },
  ],
  [
    { amount: 120, from: "David", to: "Hasseloff" },
    { amount: 420, from: "Britney", to: "Spears" },
    { amount: 69, from: "David", to: "Goliath" },
  ],
  [
    { amount: 40, from: "Jack", to: "Jackie" },
    { amount: 50, from: "Chan", to: "Rocky" },
    { amount: 60, from: "Dave", to: "Jinny" },
  ],
  [
    { amount: 10, from: "Harry", to: "Potter" },
    { amount: 20, from: "Ron", to: "Weasly" },
    { amount: 30, from: "Hermoine", to: "Granger" },
  ],
  [
    { amount: 40, from: "Snow White", to: "Prince" },
    { amount: 50, from: "Brenner", to: "Max" },
  ],
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
