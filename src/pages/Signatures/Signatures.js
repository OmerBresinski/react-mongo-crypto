import React, { useState } from "react";
import Text from "components/Text";
import Tabs from "components/Tabs";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const Signatures = () => {
  return (
    <S.Signatures>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Signatures
          </Text>
        </S.Header>
        <Tabs items={["Sign", "Verify"]} />
      </S.Content>
    </S.Signatures>
  );
};

export default Signatures;
