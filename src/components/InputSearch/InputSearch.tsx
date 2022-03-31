import React from "react";
import { Icon } from "../Icons/Icons";
import { InputSearchStyles } from "./InputSearch.style";

interface InputProps {
  search: string;
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: React.FC<InputProps> = ({
  search,
  onChangeSearch,
}) => {
  return (
    <div>
      <InputSearchStyles.WrapperInput>
        <InputSearchStyles.Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search here..."
        />
        <InputSearchStyles.WrapperIcon>
          <Icon type="search" />
        </InputSearchStyles.WrapperIcon>
      </InputSearchStyles.WrapperInput>
    </div>
  );
};
