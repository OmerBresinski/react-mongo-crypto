import React from "react";
import { useForm, useHash } from "hooks";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const BlockForm = () => {
  const { form, handleChange, handleNumberFieldChange } = useForm();
  const { hash } = useHash(`${form.block?.value}${form.nonce?.value}${form.data?.value}`);

  return (
    <S.BlockForm>
      <TextInput
        fieldName="block"
        variant={C.VARIANT.outlined}
        onChange={handleNumberFieldChange}
        label={"Block"}
        {...form.block}
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
      <TextInput
        fieldName="hash"
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
