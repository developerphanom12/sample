import React from 'react';

import { ReceiptsSelectsStyles } from './ReceiptsSelects.style';
import { CustomSelect } from '../../CustomSelect';
import { ActionMeta } from 'react-select';

interface IReceiptsSelectsProps {
  timeFilterValue: {
    value: string;
    label: string;
  };
  timeFilterOptions: {
    value: string;
    label: string;
  }[];
  onChangeCategoryFieldHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
}

export const ReceiptsSelects: React.FC<IReceiptsSelectsProps> = (props) => {
  const { timeFilterOptions, timeFilterValue, onChangeCategoryFieldHandler } =
    props;
  return (
    <ReceiptsSelectsStyles.SelectorWrapper>
      <ReceiptsSelectsStyles.SelectorBox>
        <ReceiptsSelectsStyles.SelectorTitle>
          Time
        </ReceiptsSelectsStyles.SelectorTitle>
        <CustomSelect
          defaultOption={timeFilterOptions[0]}
          options={timeFilterOptions}
          value={timeFilterValue}
          onChangeValueHandler={onChangeCategoryFieldHandler}
          marginBottom="0"
          height="45"
        />
      </ReceiptsSelectsStyles.SelectorBox>
    </ReceiptsSelectsStyles.SelectorWrapper>
  );
};
