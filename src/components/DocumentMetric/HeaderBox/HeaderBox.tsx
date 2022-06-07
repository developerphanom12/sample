import React, { FC } from 'react';

import { HeaderBoxStyles } from './HeaderBox.style';
import { Icon } from '../../Icons';

interface IHeaderBoxProps {
  userName: string;
}
export const HeaderBox: FC<IHeaderBoxProps> = (props) => {
  const { userName } = props;
  return (
    <HeaderBoxStyles.HeaderBlock>
      <HeaderBoxStyles.TitleBlock>
        <HeaderBoxStyles.Title>{`Welcome ${userName}!`}</HeaderBoxStyles.Title>
        <HeaderBoxStyles.MetricBlock>
          <Icon type="shadowedMetric" />
          <HeaderBoxStyles.MetricTitle>
            Receipt Metric
          </HeaderBoxStyles.MetricTitle>
        </HeaderBoxStyles.MetricBlock>
      </HeaderBoxStyles.TitleBlock>
    </HeaderBoxStyles.HeaderBlock>
  );
};
