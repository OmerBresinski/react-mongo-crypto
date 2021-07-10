import React, { useEffect } from "react";
import { useForm, useHash } from "hooks";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const BlockForm = ({ previousHash, width = "650px", onHash, index = 0 }) => {
  const { form, handleChange, handleNumberFieldChange } = useForm();
  const { hash } = useHash(`${form.block?.value}${form.nonce?.value}${form.data?.value}`);

  useEffect(() => {
    onHash && onHash(hash.toString(), index);
  }, [hash]);

  console.log(form);

  return (
    <S.BlockForm width={width}>
      <TextInput
        fieldName="block"
        variant={C.VARIANT.outlined}
        onChange={handleNumberFieldChange}
        label={"Block"}
        isDirty={form.block?.isDirty}
        value={form.block?.value || index + 1}
        isValid={form.block?.isValid}
      />
      <TextInput
        fieldName="nonce"
        variant={C.VARIANT.outlined}
        onChange={handleChange}
        label={"Nonce"}
        {...form.nonce}
      />
      <TextInput
        fieldName="data"
        variant={C.VARIANT.outlined}
        onChange={handleChange}
        label={"Data"}
        multiline
        rows={12}
        {...form.data}
      />
      {previousHash && (
        <TextInput
          variant={C.VARIANT.outlined}
          onChange={handleChange}
          label={"Previous"}
          disabled
          value={previousHash}
        />
      )}
      <TextInput
        variant={C.VARIANT.outlined}
        onChange={handleChange}
        label={"Hash"}
        disabled
        value={hash}
      />
    </S.BlockForm>
  );
};

export default BlockForm;
