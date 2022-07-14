import { FC } from 'react';

import { Icon } from '../Icons';
import { LoaderComponent } from '../Loader';
import { UploadInput } from '../UploadInput';
import { UploadLogoButtonStyles as Styled } from './UploadLogoButton.style';

interface IUploadLogoButtonProps {
  id?: string;
  name?: string;
  isCompanyLogoLoading?: boolean;
  isEdit: boolean;
  logoName: string;
  logoSrc: string;
  onDeleteCompanyLogo: () => Promise<void>;
  onUploadCompanyLogoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onDeleteLogoHandler: () => void;
}
export const UploadLogoButton: FC<IUploadLogoButtonProps> = (props) => {
  const {
    onUploadCompanyLogoHandler,
    onDeleteLogoHandler,
    id,
    name,
    logoName,
    logoSrc,
    isCompanyLogoLoading,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.LogoTextWrapper>
        Logo
        <Styled.Size> (Size: 100 x 100 px)</Styled.Size>
      </Styled.LogoTextWrapper>
      {isCompanyLogoLoading ? (
        <LoaderComponent theme="preview" />
      ) : !!logoSrc ? (
        <Styled.Logo>
          <Styled.IconWrapper onClick={onDeleteLogoHandler}>
            <Icon type="deletePhotoIcon" />
          </Styled.IconWrapper>
          <Styled.ImageWrapper>
            <Styled.Image src={logoSrc} alt={logoName} />
          </Styled.ImageWrapper>
        </Styled.Logo>
      ) : (
        <>
          <UploadInput
            id={id}
            name={name}
            onChangeFiles={onUploadCompanyLogoHandler}
          />
          <Styled.Label htmlFor={id}>
            <Icon type="insertLogo" />
          </Styled.Label>
        </>
      )}
    </Styled.Wrapper>
  );
};
