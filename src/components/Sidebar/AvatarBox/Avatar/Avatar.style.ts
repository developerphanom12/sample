import { styled } from 'app/theme';

export const AvatarStyles = {
  LoaderWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    background: ${({ theme }) => theme.colors.lighterGrey};
    width: 150px;
    height: 150px;
    border: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
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
};
