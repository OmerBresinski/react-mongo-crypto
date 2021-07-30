import { useState, useEffect } from "react";
import sha256 from "crypto-js/sha256";

export const useHash = (data, block) => {
  const [hash, setHash] = useState(block?.hash || "");

  useEffect(() => {
    setHash(sha256(data).toString());
  }, []);

  useEffect(() => {
    block?.hash && setHash(block.hash);
  }, [block]);

  const calculateHash = (data) => {
    return sha256(data).toString();
  };

  return { hash, calculateHash, setHash };
};
