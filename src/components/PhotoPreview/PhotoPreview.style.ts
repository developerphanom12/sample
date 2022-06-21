import { styled } from 'app/theme';

export const PhotoPreviewStyles = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  `,
  Content: styled.div<{ imageSrc: string }>`
    width: 254px;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    background: ${(props) => `url(${props.imageSrc})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
  `,
};
