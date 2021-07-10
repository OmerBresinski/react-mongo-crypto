import { useState, useEffect } from "react";
import sha256 from "crypto-js/sha256";

export const useHash = (data) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(sha256(data).toString());
  }, [data]);

  const calculateHash = (data) => {
    return sha256(data).toString();
  };

  return { hash, calculateHash, setHash };
};
