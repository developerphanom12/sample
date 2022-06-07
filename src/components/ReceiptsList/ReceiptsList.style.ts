import { styled } from 'app/theme';

export const ReceiptsListStyles = {
  Container: styled.div`
    padding: 28px 38px 56px 38px;
    height: 100%;
  `,
  Title: styled.h2`
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 19px;
    text-align: start;
  `,
  ItemWrapper: styled.div``,
  EmptyDataWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Image: styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    height: 100%;
    max-height: 500px;
    min-height: 300px;
    min-width: 300px;
    max-width: 500px;
  `,
  EmptyDataTitle: styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.xnormal};
  `,
};
