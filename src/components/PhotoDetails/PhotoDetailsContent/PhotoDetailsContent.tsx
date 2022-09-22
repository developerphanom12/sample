import { FC, useEffect } from 'react';

import { CheckboxItem } from '../../Checkbox';
import { CustomDatePicker } from '../../CustomDatePicker';
import { CustomSelect } from '../../CustomSelect';
import { Input } from '../../Input';
import { RadioButton } from '../../RadioButton';
import { StatusBar } from '../../StatusBar';
import { ButtonsBox } from '../ButtonsBox';
import { usePhotoDetailsContentState } from './PhotoDetailsContent.state';
import { PhotoDetailsContentStyles as Styled } from './PhotoDetailsContent.style';
import { PhotoDetailsContentItem } from './PhotoDetailsContentItem';

export const PhotoDetailsContent: FC = () => {
  const {
    inputFields,
    radioButtonValue,
    statusValue,
    dateValue,
    isOpen,
    isLoading,
    formattedDate,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onChangeRadioButtonHandler,
    onSaveButtonClickHandler,
    onCancelButtonClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
  } = usePhotoDetailsContentState();

  useEffect(() => {
    onGetAllMasterItemsHandler();
  }, []);
  return (
    <>
      <Styled.MainWrapper>
        <Styled.StatusBarWrapper>
          <PhotoDetailsContentItem label="Status">
            <StatusBar status={statusValue as TStatuses} />
          </PhotoDetailsContentItem>
        </Styled.StatusBarWrapper>

        {statusValue === 'review' && (
          <PhotoDetailsContentItem label="Mark as">
            <Styled.RadioButtonWrapper>
              <RadioButton
                isChecked={radioButtonValue === 'accepted'}
                value="accepted"
                onChange={onChangeRadioButtonHandler}
                labelText="Accepted"
              />
              <RadioButton
                isChecked={radioButtonValue === 'rejected'}
                value="rejected"
                onChange={onChangeRadioButtonHandler}
                labelText="Rejected"
              />
            </Styled.RadioButtonWrapper>
          </PhotoDetailsContentItem>
        )}
        {inputFields.map((item) => (
          <PhotoDetailsContentItem key={item.label} label={item.label}>
            {item.type === 'date' ? (
              <CustomDatePicker
                isInputDate
                onChange={item.onChangeDate}
                onDatePickerClickHandler={onDatePickerClickHandler}
                onClickOutsideDatePickerHandler={
                  onClickOutsideDatePickerHandler
                }
                isDatePickerOpen={isOpen}
                selectedDate={dateValue ? new Date(dateValue) : null}
                formattedDate={formattedDate}
                datePickerRef={datePickerRef}
              />
            ) : item.type === 'select' ? (
              <CustomSelect
                value={item.value}
                options={item.options}
                onChangeValueHandler={item.onChangeSelect}
                marginBottom="0px"
                isDisabled={item.isDisabled}
                isRemoveBorder
              />
            ) : item.inputType === 'number' ? (
              <Input
                value={item.value as string}
                inputType={item.inputType}
                onChangeValue={item.onChange}
                isTextArea={item.isTextArea}
                isHiddenLabel
                isNoMargin
                isRemoveBorder
                onKeyDown={onForbiddenCharacterClick}
              />
            ) : item.type === 'input' ? (
              <Input
                value={item.value as string}
                inputType={item.inputType}
                onChangeValue={item.onChange}
                isTextArea={item.isTextArea}
                isHiddenLabel
                isRemoveBorder
                isNoMargin
              />
            ) : (
              <Styled.CheckBoxWrapper>
                <CheckboxItem
                  name={item.label}
                  isChecked={item.value as boolean}
                  labelText={item.labelText}
                  onChange={item.onChangeCheckbox}
                />
              </Styled.CheckBoxWrapper>
            )}
          </PhotoDetailsContentItem>
        ))}
      </Styled.MainWrapper>
      <ButtonsBox
        secondButtonText="Save"
        onUploadButtonClickHandler={onSaveButtonClickHandler}
        onCancelButtonClickHandler={onCancelButtonClickHandler}
        isLoading={isLoading}
      />
    </>
  );
};
