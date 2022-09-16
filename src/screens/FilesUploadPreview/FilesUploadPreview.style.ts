import { styled } from 'styles/theme';

export const FilesUploadPreviewStyles = {
  LayoutWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.lighterGrey};
  `,
  MainWrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 35px;
    display: flex;
    background: ${({ theme }) => theme.colors.lighterGrey};
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    padding: 15px 20px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 25px 0;
    flex: 1;
  `,
  ReceiptImage: styled.img`
    max-width: 254px;
    max-height: 358px;
    min-width: 250px;
    max-height: 310px;
    width: 100%;
    height: 100%;
  `,
  TestImage: styled.img`
    width: 100px;
    height: 100px;
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
    padding: 0;
  `,
};
