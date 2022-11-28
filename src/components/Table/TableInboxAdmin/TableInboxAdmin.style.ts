import { styled } from 'styles/theme';

import { TABLE_GRID_MARKUP } from './TableInboxAdmin.constants';

export const TableInboxAdminStyles = {
  Head: styled.div`
    display: grid;
    grid-template-columns: ${TABLE_GRID_MARKUP};
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    margin-right: 3px;
  `,
  Text: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    margin-right: 3px;
    padding-left: 9px;
  `,
  Selector: styled.div`
    margin-right: 3px;
    padding-left: 10px;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
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
