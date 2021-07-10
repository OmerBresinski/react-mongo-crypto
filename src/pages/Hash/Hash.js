import React, { useEffect } from "react";
import { useForm, useHash } from "hooks";
import Text from "components/Text";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const Hash = () => {
  const { form, handleChange } = useForm();
  const { hash } = useHash(form.data?.value);

  return (
    <S.Hash>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Hash
          </Text>
        </S.Header>
        <S.Form>
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
            {...form.hash}
          />
        </S.Form>
      </S.Content>
    </S.Hash>
  );
};

export default Hash;
