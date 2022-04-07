import { FC } from 'react';
import { ActionMeta } from 'react-select';

import { DropdownIndicator } from './DropdownIndicator';
import { StyledReactSelect } from './CustomSelect.style';

import { IOption } from './types';

interface ICustomSelectProps {
  onChangeValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  defaultOption: IOption | unknown;
  options: IOption[];
}

export const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const { onChangeValueHandler, defaultOption, options } = props;

  return (
    <StyledReactSelect
      components={{ DropdownIndicator }}
      classNamePrefix="Select"
      options={options}
      defaultValue={defaultOption}
      onChange={onChangeValueHandler}
    />
  );
};
