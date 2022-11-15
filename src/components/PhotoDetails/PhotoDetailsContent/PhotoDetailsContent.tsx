import { FC, useEffect } from 'react';

import { StatusBar } from '../../StatusBar';
import { ButtonsBox } from '../ButtonsBox';
import { FieldsBox } from './FieldsBox';
import { usePhotoDetailsContentState } from './PhotoDetailsContent.state';
import { PhotoDetailsContentStyles as Styled } from './PhotoDetailsContent.style';
import { PhotoDetailsContentItem } from './PhotoDetailsContentItem';
import { RadioButtonsBox } from './RadioButtonsBox';

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
            <RadioButtonsBox
              radioButtonValue={radioButtonValue}
              onChangeRadioButtonHandler={onChangeRadioButtonHandler}
            />
          </PhotoDetailsContentItem>
        )}
        <FieldsBox
          inputFields={inputFields}
          onDatePickerClickHandler={onDatePickerClickHandler}
          onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
          isOpen={isOpen}
          formattedDate={formattedDate}
          datePickerRef={datePickerRef}
          selectedDate={dateValue ? new Date(dateValue) : null}
          onForbiddenCharacterClick={onForbiddenCharacterClick}
        />
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
