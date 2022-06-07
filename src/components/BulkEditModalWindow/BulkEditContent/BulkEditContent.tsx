import { FC } from 'react';

import { CustomSelect } from '../../CustomSelect';
import { Input } from '../../Input/Input';
import { ModalButtonsBox } from '../../ModalButtonsBox';
import { useBulkEditContentState } from './BulkEditContent.state';
import { BulkEditContentStyles as Styled } from './BulkEditContent.style';
import { BulkEditContentItem } from './BulkEditContentItem';

export const BulkEditContent: FC = () => {
  const inputFields = useBulkEditContentState();
  return (
    <>
      <Styled.MainWrapper>
        {inputFields.map((item) => (
          <BulkEditContentItem key={item.label} label={item.label}>
            {item.type === 'select' ? (
              <CustomSelect
                defaultOption={undefined}
                options={[]}
                onChangeValueHandler={item.onChangeSelect}
                marginBottom="0"
              />
            ) : (
              <Input
                value={item.value}
                onChangeValue={item.onChange}
                isTextArea={item.isTextArea}
                isHiddenLabel
                isNoMargin
                inputHeight={item.height}
              />
            )}
          </BulkEditContentItem>
        ))}
      </Styled.MainWrapper>
      <ModalButtonsBox />
    </>
  );
};
