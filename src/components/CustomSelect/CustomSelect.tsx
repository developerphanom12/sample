import { FC } from 'react';
import { ActionMeta, SingleValue, OnChangeValue } from 'react-select';

import { DropdownIndicator } from './DropdownIndicator';
import { StyledReactSelect, SelectWrapper } from './CustomSelect.style';

import { IOption, IsMulti } from './types';

interface ICustomSelectProps {
  name?: string;
  onChangeValueHandler?: (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption | unknown>
  ) => void;
  marginBottom?: string;
  value?: SingleValue<IOption>;
  height?: string;
  defaultOption?: IOption;
  options?: IOption[];
  paginate?: boolean;
  isDisabled?: boolean;
}

export const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const {
    onChangeValueHandler,
    defaultOption,
    options,
    value,
    marginBottom,
    height,
    paginate,
    name,
    isDisabled,
  } = props;

  return (
    <SelectWrapper>
      <StyledReactSelect
        height={height}
        marginBottom={marginBottom}
        components={{ DropdownIndicator }}
        classNamePrefix="Select"
        options={options}
        defaultValue={defaultOption}
        value={value}
        onChange={onChangeValueHandler}
        paginate={paginate}
        name={name}
        menuPlacement="auto"
        isDisabled={isDisabled}
        placeholder={isDisabled && 'Nothing for select'}
      />
    </SelectWrapper>
  );
};
