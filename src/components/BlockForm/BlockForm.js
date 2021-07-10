import React, { useState, useEffect } from "react";
import { useForm, useHash } from "hooks";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";
import Button from "components/Button";

const BlockForm = ({
  previousHash,
  width = "650px",
  onHash,
  index = 0,
  isDirty,
  setIsDirty,
}) => {
  const [isValidHash, setIsValidHash] = useState(false);
  const { form, handleChange, handleNumberFieldChange, editEntry } = useForm();
  const { hash, calculateHash, setHash } = useHash(
    `${form.block?.value}${form.nonce?.value}${form.data?.value}${previousHash}`
  );

  useEffect(() => {
    onHash && onHash(hash.toString(), index);
    validateHash();
  }, [hash]);

  useEffect(() => {
    if (previousHash) {
      setHash(
        calculateHash(
          `${form.block?.value}${form.nonce?.value}${form.data?.value}${previousHash}`
        )
      );
    }
  }, [previousHash]);

  const validateHash = () => {
    if (
      hash.substring(0, C.CRYPTO.difficulty) !== Array(C.CRYPTO.difficulty + 1).join(0)
    ) {
      setIsValidHash(false);
    } else {
      setIsValidHash(true);
    }
  };

  function mine() {
    let hashString = hash;
    if (
      hashString.substring(0, C.CRYPTO.difficulty) ===
      Array(C.CRYPTO.difficulty + 1).join(0)
    )
      return;
    let nonce = 0;
    while (
      hashString.substring(0, C.CRYPTO.difficulty) !==
        Array(C.CRYPTO.difficulty + 1).join(0) &&
      nonce < C.CRYPTO.maxNonce
    ) {
      nonce++;
      hashString = calculateHash(
        `${form.block?.value || index + 1}${previousHash}${
          form.data.value
        }${nonce}${previousHash}`
      );
    }
    setIsDirty(true);
    editEntry("nonce", nonce);
    setHash(hashString);
  }

  const handleNonceChange = (e) => {
    const value = e.value;
    setHash(
      calculateHash(`${form.block?.value}${value}${form.data?.value}${previousHash}`)
    );
    handleChange(e);
  };

  const handleBlockChange = (e) => {
    const value = e.value;
    setHash(
      calculateHash(`${value}${form.nonce?.value}${form.data?.value}${previousHash}`)
    );
    handleNumberFieldChange(e);
  };

  const handleDataChange = (e) => {
    const value = e.value;
    setHash(
      calculateHash(`${form.block?.value}${form.nonce?.value}${value}${previousHash}`)
    );
    handleChange(e);
  };

  return (
    <S.BlockForm width={width}>
      <TextInput
        fieldName="block"
        variant={C.VARIANT.outlined}
        onChange={handleBlockChange}
        label={"Block"}
        value={form.block?.value || index + 1}
        isValid={isValidHash}
        isDirty={isDirty}
      />
      <TextInput
        fieldName="nonce"
        variant={C.VARIANT.outlined}
        onChange={handleNonceChange}
        label={"Nonce"}
        {...form.nonce}
        isValid={isValidHash}
        isDirty={isDirty}
      />
      <TextInput
        fieldName="data"
        variant={C.VARIANT.outlined}
        onChange={handleDataChange}
        label={"Data"}
        multiline
        rows={12}
        {...form.data}
        isValid={isValidHash}
        isDirty={isDirty}
      />
      {previousHash && (
        <TextInput
          variant={C.VARIANT.outlined}
          onChange={handleChange}
          label={"Previous"}
          disabled
          value={previousHash}
          isValid={isValidHash}
          isDirty={isDirty}
        />
      )}
      <TextInput
        variant={C.VARIANT.outlined}
        onChange={handleChange}
        label={"Hash"}
        disabled
        value={hash}
        isValid={isValidHash}
        isDirty={isDirty}
      />
      <Button label="Mine" onClick={mine} color={"primary"} variant="text" />
    </S.BlockForm>
  );
};

export default BlockForm;
