import React, { useState, useEffect } from "react";
import Text from "components/Text";
import Tabs from "components/Tabs";
import SignMessage from "./SignMessage";
import VerifyMessage from "./VerifyMessage";
import * as S from "./style";

const Signatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [messageSignature, setMessageSignature] = useState("");
  const [visibleSection, setVisibleSection] = useState(SECTIONS.sign);

  useEffect(() => {
    activeTab === 1
      ? setVisibleSection(SECTIONS.verify)
      : setVisibleSection(SECTIONS.sign);
  }, [activeTab]);

  const sign = () => {};

  const verify = () => {};

  const handleMessageChange = () => {};

  const handlePrivateKeyChange = () => {};

  const handlePublicKeyChange = () => {};

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
              messageSignature={messageSignature}
              onMessageChange={handleMessageChange}
              onPrivateKeyChange={handlePrivateKeyChange}
              onSignClick={sign}
            />
          ) : (
            <VerifyMessage
              message={message}
              publicKey={publicKey}
              messageSignature={messageSignature}
              onMessageChange={handleMessageChange}
              onPublicKeyChange={handlePublicKeyChange}
              onSignClick={sign}
              onVerifyClick={verify}
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
