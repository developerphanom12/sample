import { FC, useState } from 'react';

import { LinkItem } from '../LinkItem';
import { useLinkListState } from './LinkList.state';
import { LinksListStyles as Styled } from './LinksList.style';

import { ROUTES } from 'constants/routes';
import styled from 'styled-components';
import { DeleteModalWindow } from '../../DeleteModalWindow';
import { useToggle } from '../../../hooks/useToggle';
import { apiServices } from '../../../services/api-service';
import { useSelector } from 'react-redux';
import { IState } from '../../../services/redux/reducer';

interface ILinksList {
  isActiveAccount: boolean;
}
export const LinksList: FC<ILinksList> = (props) => {
  const { isActiveAccount } = props;
  const {

    user: {
      user,
    },

  } = useSelector((state: IState) => state);
  const DelAcc = styled.div`
    width: 100%;
    height: 100%;
    max-height: 55px;
    min-height: 50px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    color: ${(props) => props.theme.colors.lightBlack};
    border-bottom: ${({ theme }) =>
      ` 1px solid ${theme.colors.boxShadowBlack}`};
    padding-left: 50px;
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.pink};
      color: ${(props) => props.theme.colors.lightBlack};
    }
    
  `


  const onDelete = async () => {
    const activeAccount = user?.accounts?.find((item: { id: string }) => item.id === user?.active_account)
    if (activeAccount) {
      const URL = `company-member/delete-own/${user.id}`;
      await apiServices.deleteData(URL, { active_account: activeAccount.id });
    }
    onDeleteModalWindowToggle()
    localStorage.clear()
    window.location.reload()

  }
  const settingsLink = useLinkListState();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();
  return (
    <Styled.LinksWrapper data-testid="links">
      {settingsLink.map((link) => (
        <LinkItem
          key={link.title}
          path={link.route}
          title={link.title}
          onClick={link.onClick}
          exact={link.route === '/settings'}
          isDisabled={
            !isActiveAccount &&
            link.route !== ROUTES.settings &&
            !isActiveAccount &&
            link.route !== ROUTES.login
          }
        />
      ))}

      <DelAcc onClick={onDeleteModalWindowToggle}>
        Delete Account
      </DelAcc>
      <DeleteModalWindow
        isLoading={false}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}

        onDeleteButtonClickHandler={onDelete}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={''}
        account={'yes'}
        categoryName=""
      ></DeleteModalWindow>
    </Styled.LinksWrapper>
  );
};
