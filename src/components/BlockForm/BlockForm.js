import React, { useState, useEffect } from "react";
import { useForm, useHash } from "hooks";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as C from "constant";
import * as S from "./style";

const BlockForm = ({
  previousHash,
  width = "650px",
  dataRows = 12,
  onHash,
  index = 0,
  isDirty,
  setIsDirty,
  transactions,
}) => {
  const [isValidHash, setIsValidHash] = useState(false);
  const [transactionParams, setTransactionParams] = useState({});
  const { form, handleChange, handleNumberFieldChange, editEntry } = useForm();
  const { hash, calculateHash, setHash } = useHash(
    `${form.block?.value}${form.nonce?.value}${
      form.data?.value
    }${previousHash}${JSON.stringify(transactionParams)}`
  );

  useEffect(() => {
    onHash && onHash(hash.toString(), index);
    validateHash();
  }, [hash]);

  useEffect(() => {
    if (previousHash) {
      setHash(
        calculateHash(
          `${form.block?.value}${form.nonce?.value}${
            form.data?.value
          }${previousHash}${JSON.stringify(transactionParams)}`
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
          form.data?.value
        }${nonce}${previousHash}${JSON.stringify(transactionParams)}`
      );
    }
    setIsDirty(true);
    editEntry("nonce", nonce);
    setHash(hashString);
  }

  const handleNonceChange = (e) => {
    const value = e.value;
    setHash(
      calculateHash(
        `${form.block?.value}${value}${form.data?.value}${previousHash}${JSON.stringify(
          transactionParams
        )}`
      )
    );
    handleChange(e);
  };

  const handleBlockChange = (e) => {
    const value = e.value;
    if (isNaN(value)) return;
    setHash(
      calculateHash(
        `${value}${form.nonce?.value}${form.data?.value}${previousHash}${JSON.stringify(
          transactionParams
        )}`
      )
    );
    handleNumberFieldChange(e);
  };

  const handleDataChange = (e) => {
    const value = e.value;
    setHash(
      calculateHash(
        `${form.block?.value}${form.nonce?.value}${value}${previousHash}${JSON.stringify(
          transactionParams
        )}`
      )
    );
    handleChange(e);
  };

  const handleTransactionChange = (e) => {
    setTransactionParams((params) => {
      return { ...params, [e.fieldName]: e.value };
    });
    setHash(
      calculateHash(
        `${form.block?.value}${form.nonce?.value}${
          form.data?.value
        }${previousHash}${JSON.stringify({
          ...transactionParams,
          [e.fieldName]: e.value,
        })}`
      )
    );
    handleChange(e);
  };

  const handleTransactionAmountChange = (e) => {
    if (!isNaN(e.value)) {
      setTransactionParams((params) => {
        return { ...params, [e.fieldName]: e.value };
      });
      setHash(
        calculateHash(
          `${form.block?.value}${form.nonce?.value}${
            form.data?.value
          }${previousHash}${JSON.stringify({
            ...transactionParams,
            [e.fieldName]: e.value,
          })}`
        )
      );
      handleNumberFieldChange(e);
    }
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
      {transactions?.length ? (
        transactions.map(({ amount, from, to }, index) => {
          return (
            <div key={index} style={{ display: "flex", gap: "8px" }}>
              <TextInput
                fieldName={`amount_${index}`}
                variant={C.VARIANT.outlined}
                onChange={handleTransactionAmountChange}
                label={"$"}
                value={form[`amount_${index}`]?.value ?? amount}
                isValid={isValidHash}
                isDirty={isDirty}
              />
              <TextInput
                fieldName={`from_${index}`}
                variant={C.VARIANT.outlined}
                onChange={handleTransactionChange}
                label={"From"}
                value={form[`from_${index}`]?.value ?? from}
                isValid={isValidHash}
                isDirty={isDirty}
              />
              <TextInput
                fieldName={`to_${index}`}
                variant={C.VARIANT.outlined}
                onChange={handleTransactionChange}
                label={"To"}
                value={form[`to_${index}`]?.value ?? to}
                isValid={isValidHash}
                isDirty={isDirty}
              />
            </div>
          );
        })
      ) : (
        <TextInput
          fieldName="data"
          variant={C.VARIANT.outlined}
          onChange={handleDataChange}
          label={"Data"}
          multiline
          rows={dataRows}
          {...form.data}
          isValid={isValidHash}
          isDirty={isDirty}
        />
      )}
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
      <Button label="Mine" onClick={mine} color={"primary"} variant="outlined" />
    </S.BlockForm>
  );
};

export default BlockForm;
