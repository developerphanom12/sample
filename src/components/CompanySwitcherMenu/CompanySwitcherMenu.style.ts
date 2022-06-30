import { styled } from 'app/theme';

export const CompanySwitcherMenuStyles = {
  Title: styled.span`
    display: flex;
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: 14px;
    padding: 17px 21px 10px;
  `,
  Wrapper: styled.div`
    position: absolute;
    cursor: pointer;
    top: 100%;
    right: -1px;
    width: 311px;
    border: 1px solid ${(props) => props.theme.colors.opacityBlack};
    box-shadow: 0px 1px 1px ${(props) => props.theme.colors.boxShadowBlack};
    border-radius: ${(props) => props.theme.size.borderRadius};
    background-color: ${(props) => props.theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.xs};
  `,
};
