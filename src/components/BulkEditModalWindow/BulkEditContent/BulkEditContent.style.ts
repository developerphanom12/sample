import { styled } from 'styles/theme';

export const BulkEditContentStyles = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 21px 33px 0 33px;
    width: 100%;
    flex: 1;
  `,
  ChildrenWrapper: styled.div`
    display: flex;
    max-width: 381px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    display: flex;
    width: auto;
    align-items: center;
    margin-bottom: 12px;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
  `,
};
