import React from 'react';

import { DocumentMetricStyles } from './DocumentMetric.style';
import { DocumentMetricItemList } from './DocumentMetricItemList';
import { HeaderBox } from './HeaderBox';

interface IDocumentMetricProps {
  userName: string;
}

export const DocumentMetric: React.FC<IDocumentMetricProps> = (props) => {
  const { userName } = props;
  return (
    <DocumentMetricStyles.Container>
      <DocumentMetricStyles.Head>Dashboard</DocumentMetricStyles.Head>
      <HeaderBox userName={userName} />
      <DocumentMetricItemList />
    </DocumentMetricStyles.Container>
  );
};
