import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const DeleteModalWindowStyles = {
  content: {
    ...modalContentStyles,
    width: '361px',
    height: '292px',
  },
  overlay,
};

export const DeleteModalWindowContentStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  HeaderBox: styled.div`
    padding: 21px 33px 16px 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 62px;
    height: 100%;
    width: 100%;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.mediumLarge};
    color: ${({ theme }) => theme.colors.black};
  `,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 31px 33px 44px 37px;
    align-items: center;
    width: 100%;
  `,
  SubTitle: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    line-height: 19px;
    margin: 32px 0 25px 0;
    text-align: center;
  `,
  ButtonsBox: styled.div`
    display: flex;
    width: 100%;
    max-width: 231px;
    justify-content: center;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
};
