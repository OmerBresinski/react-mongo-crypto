import { useState, useEffect } from "react";
import sha256 from "crypto-js/sha256";

export const useHash = (data) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(sha256(data).toString());
  }, [data]);

  return { hash };
};
