import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant={C.VARIANT.filled} {...props} />;
};

const VerifyMessage = ({
  message,
  publicKey,
  messageSignature,
  onMessageChange,
  onPublicKeyChange,
  onVerifyClick,
  isVerified,
}) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleVerifyClick = () => {
    setIsSnackbarOpen(true);
    onVerifyClick();
  };

  const handleClose = () => {
    setIsSnackbarOpen(false);
  };

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
        onClick={handleVerifyClick}
        color={"primary"}
        variant="outlined"
      />
      <Snackbar open={isSnackbarOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity={isVerified ? "success" : "error"}>
          {isVerified
            ? "The message has been verified successfully"
            : "The message is not verified"}
        </Alert>
      </Snackbar>
    </S.VerifyMessage>
  );
};

export default VerifyMessage;
