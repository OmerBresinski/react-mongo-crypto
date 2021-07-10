import React, { useState, useRef } from "react";
import Text from "components/Text";
import TextInput from "components/TextInput";
import Button from "components/Button";
import EC from "elliptic";
import * as C from "constant";
import * as S from "./style";

const Keys = () => {
  const ec = useRef(new EC.ec("secp256k1"));
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleRandomClick = () => {
    const key = ec.current.genKeyPair();
    setPrivateKey(key.getPrivate("hex"));
    setPublicKey(key.getPublic("hex"));
  };

  const handlePrivateKeyChange = ({ value }) => {
    if (value) {
      const publicKey = ec.current.keyFromPrivate(value)?.getPublic("hex");
      setPrivateKey(value);
      setPublicKey(publicKey);
    } else {
      setPrivateKey("");
      setPublicKey("");
    }
  };

  return (
    <S.Keys>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Public / Private Key Pairs
          </Text>
        </S.Header>
        <S.KeyPair>
          <S.PrivateKey>
            <TextInput
              fieldName="privateKey"
              variant={C.VARIANT.outlined}
              onChange={handlePrivateKeyChange}
              label={"Private Key"}
              value={privateKey}
            />
            <Button
              label="Random"
              onClick={handleRandomClick}
              color={"primary"}
              variant="outlined"
            />
          </S.PrivateKey>
          <S.PublicKey>
            <TextInput
              fieldName="publicKey"
              variant={C.VARIANT.outlined}
              onChange={() => {}}
              label={"Public Key"}
              value={publicKey}
              disabled
            />
          </S.PublicKey>
        </S.KeyPair>
      </S.Content>
    </S.Keys>
  );
};

export default Keys;
