import { styled, Z_INDEX } from 'app/theme';

export const HoverUploadLogo = styled.div`
  display: none;
  width: 75px;
  height: 75px;
  cursor: pointer;
`;

export const AvatarBoxStyles = {
  MainWrapper: styled.div`
    padding: 30px 10px 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  `,
  UserInfoWrapper: styled.div`
    margin-left: 40px;
  `,
  Label: styled.p`
    display: flex;
    justify-content: center;
    max-height: 50px;
    min-height: 40px;
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
  `,
  InputLabel: styled.label`
    overflow: hidden;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    position: absolute;
    z-index: ${Z_INDEX.m};
    cursor: pointer;
  `,
  ImageWrapper: styled.div`
    width: 150px;
    height: 150px;
    border: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  UploadIconWrapper: styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  ProfileImageWrapper: styled.div<{ isHover?: boolean }>`
    position: relative;
    border-radius: 100px;
    cursor: pointer;
    &:hover {
      & div {
        opacity: 0.5;
      }
      ${HoverUploadLogo} {
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        opacity: 1;
      }
    }
  `,
  Image: styled.div<{ imageSrc?: string }>`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${(props) => `url(${props.imageSrc})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
  `,
  NameBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NameAndStatus: styled.p<{ isStatus?: boolean }>`
    display: flex;
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme, isStatus }) =>
      isStatus ? theme.fontWeight.normal : theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-top: ${({ isStatus }) => isStatus && '5px'}; ;
  `,
};
