import React from "react";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const SignMessage = ({
  message,
  privateKey,
  messageSignature,
  onMessageChange,
  onPrivateKeyChange,
  onSignClick,
}) => {
  return (
    <S.SignMessage>
      <TextInput
        fieldName="message"
        variant={C.VARIANT.outlined}
        onChange={onMessageChange}
        label={"Message"}
        multiline
        rows={12}
        value={message}
      />
      <TextInput
        fieldName="privateKey"
        variant={C.VARIANT.outlined}
        onChange={onPrivateKeyChange}
        label={"Private Key"}
        value={privateKey}
      />
      <Button label="Sign" onClick={onSignClick} color={"primary"} variant="outlined" />
      <TextInput
        fieldName="messageSignature"
        variant={C.VARIANT.outlined}
        onChange={() => {}}
        label={"Message Signature"}
        value={messageSignature}
        disabled
      />
    </S.SignMessage>
  );
};

export default SignMessage;
