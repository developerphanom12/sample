import { FC } from 'react';

import { CompanySwitcherLogo } from '../../CompanySwitcherLogo';
import { Icon } from '../../Icons';
import { CompanySwitcherMenuItemStyles as Styled } from './CompanySwitcherMenuItem.style';

export interface ICompanySwitcherMenuItem {
  isLoading?: boolean;
  companyLogoSrc?: string | null;
  isActive: boolean;
  companyName: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  companyId: string;
}

export const CompanySwitcherMenuItem: FC<ICompanySwitcherMenuItem> = (
  props: ICompanySwitcherMenuItem
) => {
  const {
    isLoading,
    onClick,
    companyId,
    companyLogoSrc,
    companyName,
    isActive,
  } = props;
  return (
    <Styled.Item onClick={onClick} id={companyId}>
      <Styled.CompanyNameWrapper>
        <CompanySwitcherLogo
          companyLogoSrc={companyLogoSrc}
          companyName={companyName}
        />
        <Styled.Content>{companyName}</Styled.Content>
      </Styled.CompanyNameWrapper>
      {isActive && (
        <Styled.Logo>
          <Icon type="active" />
        </Styled.Logo>
      )}
    </Styled.Item>
  );
};
