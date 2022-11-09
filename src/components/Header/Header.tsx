import { FC, useEffect } from 'react';

import { CompanySwitcher } from '../CompanySwitcher/CompanySwitcher';
import { Icon } from '../Icons';

import { AvatarBox } from './AvatarBox';
import { HeaderStyles as Styled } from './Header.style';
import { useHeaderState } from './Header.state';
import { LinksBox } from './LinksBox';

import { ROUTES } from 'constants/routes';

export const Header: FC = () => {
  const {
    isOpenSwitcher,
    switcherRef,
    companySwitcher,
    activeCompany,
    activeAccountId,
    isFetchingData,
    isSwitchCompany,
    active_account,
    isAvatarHover,
    avatarLinks,
    userProfilePhoto,
    isUploadingPhoto,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onSwitchCompany,
    onClickSwitcherHandler,
    onSwitchCompanyHandler,
    onGetAllCompaniesHandler,
  } = useHeaderState();

  useEffect(() => {
    active_account && onGetAllCompaniesHandler();
  }, [isFetchingData]);

  useEffect(() => {
    isSwitchCompany && onSwitchCompany();
  }, [isSwitchCompany]);

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Link
          to={ROUTES.home}
          is_disabled={!active_account ? 'true' : ''}
        >
          <Styled.LogoWrapper>
            <Styled.LogoIconWrapper>
              <Icon type="receiptHubLogo" />
            </Styled.LogoIconWrapper>
            <Styled.Title>ReceiptHub</Styled.Title>
          </Styled.LogoWrapper>
        </Styled.Link>
        <Styled.BlocksWrapper>
          <LinksBox active_account={active_account} />
          <Styled.Notifications>
            {active_account ? (
              <CompanySwitcher
                activeAccountId={activeAccountId}
                activeCompany={activeCompany}
                companies={companySwitcher}
                isOpenSwitcher={isOpenSwitcher}
                onClickSwitcherHandler={onClickSwitcherHandler}
                switcherRef={switcherRef}
                onSwitchCompanyHandler={onSwitchCompanyHandler}
              />
            ) : null}
            <AvatarBox
              onMouseEnterHandler={onMouseEnterHandler}
              onMouseLeaveHandler={onMouseLeaveHandler}
              userProfilePhoto={userProfilePhoto}
              isUploadingPhoto={isUploadingPhoto}
              isAvatarHover={isAvatarHover}
              menuItems={avatarLinks}
            />
          </Styled.Notifications>
        </Styled.BlocksWrapper>
      </Styled.Container>
    </Styled.Header>
  );
};
