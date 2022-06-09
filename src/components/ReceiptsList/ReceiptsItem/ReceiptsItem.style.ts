import { styled } from 'app/theme';

export const ReceiptsItemStyles = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 19px 7px 21px;
    border: 1px solid ${({ theme }) => theme.colors.opacityBlack};
    box-shadow: 0px 1px 1px ${({ theme }) => theme.colors.boxShadowBlack};
    border-radius: ${({ theme }) => theme.size.borderRadius};
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  `,
  PaymentBlock: styled.div``,
  StatusBlock: styled.div``,
  SupplierItem: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    padding-top: 6px;
    padding-bottom: 6px;
  `,
  Item: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    padding-top: 10px;
  `,
  Link: styled.a`
    color: ${(props) => props.theme.colors.blue};
    text-decoration: underline;
    margin-right: 3px;
  `,
};
