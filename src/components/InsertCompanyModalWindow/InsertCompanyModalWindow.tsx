import { FC } from 'react';
import ReactModal from 'react-modal';

import { Input } from '../Input';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { UploadLogoButton } from '../UploadLogoButton';

import {
  CompanyModalWindowStyles,
  InsertCompanyModalWindowStyles as Styled,
} from './InsertCompanyModalWindow.style';

interface IInsertCompanyModalWindowProps extends IMasterModalWindowProps {
  onUploadCompanyLogoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onDeleteLogoHandler: () => void;
  logoSrc: string;
  logoName: string;
  isCompanyLogoLoading: boolean;
  isEdit: boolean;
  onDeleteCompanyLogo: () => Promise<void>;
}

export const InsertCompanyModalWindow: FC<IInsertCompanyModalWindowProps> = (
  props
) => {
  const {
    headerText,
    inputValue,
    isLoading,
    isModalWindowOpen,
    logoName,
    isCompanyLogoLoading,
    isEdit,
    onDeleteLogoHandler,
    onChangeInputValueHandler,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    onUploadCompanyLogoHandler,
    onDeleteCompanyLogo,
    isDisableButton,
    logoSrc,
  } = props;

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={CompanyModalWindowStyles}
    >
      <ModalWindowHeader headerTitle={headerText} />
      <Styled.Content>
        <Input
          value={inputValue}
          text="Company"
          onChangeValue={onChangeInputValueHandler}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
        <UploadLogoButton
          id="insertLogo"
          name="insertLogo"
          isEdit={isEdit}
          isCompanyLogoLoading={isCompanyLogoLoading}
          logoSrc={logoSrc}
          logoName={logoName}
          onDeleteCompanyLogo={onDeleteCompanyLogo}
          onUploadCompanyLogoHandler={onUploadCompanyLogoHandler}
          onDeleteLogoHandler={onDeleteLogoHandler}
        />
      </Styled.Content>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
      />
    </ReactModal>
  );
};
