import React, { FC, useEffect } from 'react';
import { StatusBar } from '../../StatusBar';
import { FieldsBox } from './FieldsBox';
import { usePhotoDetailsContentState } from './PhotoDetailsContent.state';
import { PhotoDetailsContentStyles as Styled } from './PhotoDetailsContent.style';
import { PhotoDetailsContentItem } from './PhotoDetailsContentItem';
import PurchaseTable from 'components/Purchases/PurchasesTable';
import { PhotoDetailsTabs } from '../PhotoDetailsTabs';
import { ButtonsBoxNew } from '../ButtonBoxNew';
import { ButtonsBox } from '../ButtonsBox';

export const PhotoDetailsContent: FC = () => {
  const {
    inputFields,
    statusValue,
    dateValue,
    isOpen,
    isLoading,
    formattedDate,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
    onChangeRadioButtonHandler,
    onSaveButtonClickHandler,
    onCancelButtonClickHandler,
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
        <Styled.Wrapper>
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
        </Styled.Wrapper>
        <Styled.FlexContainer>
          <Styled.ContentContainer>
            <PhotoDetailsTabs />
            <PurchaseTable />
          </Styled.ContentContainer>
        </Styled.FlexContainer>
      </Styled.MainWrapper>
        <Styled.Footer>
          <div>
            <ButtonsBoxNew
              onRejectButtonClickHandler={onChangeRadioButtonHandler}
              isLoading={isLoading}
            />
          </div>
          <div>
            <ButtonsBox
              onUploadButtonClickHandler={onSaveButtonClickHandler}
              onCancelButtonClickHandler={onCancelButtonClickHandler}
              isLoading={isLoading}
              onApproveButtonClickHandler={onChangeRadioButtonHandler}
            />
          </div>
        </Styled.Footer>
    </>
  );
};
