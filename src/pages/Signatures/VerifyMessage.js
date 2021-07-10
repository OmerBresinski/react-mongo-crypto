import React from "react";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const VerifyMessage = ({
  message,
  publicKey,
  messageSignature,
  onMessageChange,
  onPublicKeyChange,
  onVerifyClick,
}) => {
  return (
    <S.VerifyMessage>
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
        fieldName="publicKey"
        variant={C.VARIANT.outlined}
        onChange={onPublicKeyChange}
        label={"Public Key"}
        value={publicKey}
      />
      <TextInput
        fieldName="signature"
        variant={C.VARIANT.outlined}
        onChange={() => {}}
        label={"Signature"}
        value={messageSignature}
      />
      <Button
        label="Verify"
        onClick={onVerifyClick}
        color={"primary"}
        variant="outlined"
      />
    </S.VerifyMessage>
  );
};

export default VerifyMessage;
