import { styled } from 'styles/theme';
import { TABLE_GRID_MARKUP } from './TableExpenseDetails.constants';

export const TableExpenseDetailsStyles = {
  Head: styled.div<{ gridTemplateColumns: string }>`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};;
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
  `,
  Selector: styled.div<{ isSorted?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
    background-color: ${({ isSorted, theme }) =>
      isSorted && `${theme.colors.checkboxBackground}`};
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 50px;
    width: 100%;
  `,
};
