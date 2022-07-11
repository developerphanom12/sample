import { styled } from 'app/theme';

export const UploadLogoButtonStyles = {
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    height: 100px;
  `,
  LogoTextWrapper: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-right: 50px;
  `,
  Size: styled.span`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
  `,
  Image: styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
  `,
  ImageWrapper: styled.div`
    position: relative;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  `,
  Logo: styled.div`
    display: flex;
    position: relative;
  `,
  IconWrapper: styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    display: flex;
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: ${({ theme }) => theme.zIndex.s};
  `,
  DeletePhoto: styled.span`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
    margin-left: 8px;
    cursor: pointer;
  `,
};
