import { styled } from 'app/theme';

export const FilesUploadPreviewStyles = {
  LayoutWrapper: styled.div`
    display: grid;
    grid-template-rows: 55px;
  `,
  MainWrapper: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    padding: 15px 35px;
  `,
  PhotosWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    padding: 14px 35px;
    display: flex;
    flex-wrap: wrap;
  `,
  PhotoPreviewWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  ImageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  `,
  ReceiptImage: styled.img`
    width: 254px;
    height: 358px;
  `,
  CenterWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
  `,
  ButtonsBox: styled.div`
    display: flex;
    justify-content: space-between;
    width: 220px;
  `,
  ButtonsBoxWrapper: styled.div`
    width: 100%;
    justify-content: flex-end;
    display: flex;
    padding: 0 10px 18px 0px;
  `,
};
