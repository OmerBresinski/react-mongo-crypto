import React, { useRef, useState, createContext } from "react";
import EC from "elliptic";

export const KeysContextProvider = ({ children }) => {
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
    <KeysContext.Provider
      value={{ privateKey, publicKey, handleRandomClick, handlePrivateKeyChange }}
    >
      {children}
    </KeysContext.Provider>
  );
};

export const KeysContext = createContext({ privateKey: "", publicKey: "" });
