import React, { useState } from "react";
import Text from "components/Text";
import Tabs from "components/Tabs";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const Signatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [messageSignature, setMessageSignature] = useState("");

  const sign = () => {};

  const handleMessageChange = () => {};

  const handlePrivateKeyChange = () => {};

  const handleTabChange = (newValue) => {
    console.log(newValue);
    setActiveTab(newValue);
  };

  return (
    <S.Signatures>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Signatures
          </Text>
        </S.Header>
        <S.SignatureContent>
          <S.Navigation>
            <Tabs
              items={["Sign", "Verify"]}
              activeTab={activeTab}
              onChange={handleTabChange}
            />
          </S.Navigation>
          <S.Data>
            <TextInput
              fieldName="message"
              variant={C.VARIANT.outlined}
              onChange={handleMessageChange}
              label={"Message"}
              multiline
              rows={12}
              value={message}
            />
            <TextInput
              fieldName="privateKey"
              variant={C.VARIANT.outlined}
              onChange={handlePrivateKeyChange}
              label={"Private Key"}
              value={privateKey}
            />
            <Button label="Sign" onClick={sign} color={"primary"} variant="outlined" />
            <TextInput
              fieldName="messageSignature"
              variant={C.VARIANT.outlined}
              onChange={() => {}}
              label={"Message Signature"}
              value={messageSignature}
              disabled
            />
          </S.Data>
        </S.SignatureContent>
      </S.Content>
    </S.Signatures>
  );
};

export default Signatures;
