import React from 'react';
import { useTabItemState } from './TabItem.state';

import { TabItemStyle as Styled } from './TabItem.style';

interface ITabItemProps {
  tabName: string;
}

export const TabItem: React.FC<ITabItemProps> = (props) => {
  const { tabName } = props;

  const { onClickTabHandler, activeTabName } = useTabItemState();

  return (
    <Styled.Wrapper
      isActive={tabName === activeTabName}
      id={tabName}
      onClick={onClickTabHandler}
    >
      {tabName}
    </Styled.Wrapper>
  );
};
