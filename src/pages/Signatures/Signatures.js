import React, { useState, useEffect, useContext } from "react";
import { SHA256, enc } from "crypto-js";
import Text from "components/Text";
import Tabs from "components/Tabs";
import SignMessage from "./SignMessage";
import VerifyMessage from "./VerifyMessage";
import { KeysContext } from "contexts/KeysContextProvider";
import * as S from "./style";

const Signatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState("");
  const { privateKey, publicKey, handlePrivateKeyChange, handlePublicKeyChange, ec } =
    useContext(KeysContext);
  const [signature, setSignature] = useState("");
  const [visibleSection, setVisibleSection] = useState(SECTIONS.sign);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    activeTab === 1
      ? setVisibleSection(SECTIONS.verify)
      : setVisibleSection(SECTIONS.sign);
  }, [activeTab]);

  const sign = () => {
    if (privateKey) {
      const binaryMessage = Buffer.from(SHA256(message).toString()).toString("hex");
      setSignature(
        Buffer.from(
          ec.sign(binaryMessage, ec.keyFromPrivate(privateKey)).toDER()
        ).toString("hex")
      );
    }
  };

  const verify = () => {
    if (publicKey) {
      const key = ec.keyFromPublic(publicKey, "hex");
      const binaryMessage = Buffer.from(SHA256(message).toString()).toString("hex");
      if (binaryMessage && signature) {
        setIsVerified(key.verify(binaryMessage, signature));
      }
    }
  };

  const handleMessageChange = ({ value }) => {
    setMessage(value);
  };

  const handleTabChange = (newValue) => {
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
          {visibleSection === SECTIONS.sign ? (
            <SignMessage
              message={message}
              privateKey={privateKey}
              messageSignature={signature}
              onMessageChange={handleMessageChange}
              onPrivateKeyChange={handlePrivateKeyChange}
              onSignClick={sign}
            />
          ) : (
            <VerifyMessage
              message={message}
              publicKey={publicKey}
              messageSignature={signature}
              onMessageChange={handleMessageChange}
              onPublicKeyChange={handlePublicKeyChange}
              onSignClick={sign}
              onVerifyClick={verify}
              isVerified={isVerified}
            />
          )}
        </S.SignatureContent>
      </S.Content>
    </S.Signatures>
  );
};

const SECTIONS = {
  sign: "sign",
  verify: "verify",
};

export default Signatures;
