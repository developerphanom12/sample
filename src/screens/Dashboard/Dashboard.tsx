import { FC, useEffect } from 'react';

import { DocumentMetric } from 'components/DocumentMetric';
import { ReceiptsList } from 'components/ReceiptsList';
import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { DashboardStyles as Styled } from './Dashboard.style';
import { useDashboardState } from './Dashboard.state';

import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';

export const Dashboard: FC = () => {
  const {
    onSelectFilesHandler,
    getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    totalReceiptCount,
    lastReceipts,
    timeFilterOptions,
    receipts,
    company,
    user,
    isLoading,
    isContentLoading,
    companySwitcher,
    timeFilterValue,
  } = useDashboardState();

  useEffect(() => {
    getReceiptsStatisticHandler();
  }, [user.active_account]);

  return (
    <Styled.LayoutWrapper>
      <Styled.MainWrapper>
        <Styled.MetricWrapper>
          <DocumentMetric
            userName={user.fullName}
            companies={companySwitcher}
          />
        </Styled.MetricWrapper>
        <Styled.RightSideContentWrapper>
          {!totalReceiptCount && !isLoading ? (
            <EmptyData
              isUploadFile={true}
              title={Strings.title}
              firstSubtitle={Strings.firstSubtitle}
              secondSubtitle={Strings.secondSubtitle}
              buttonText={Strings.buttonText}
              onAddReceiptHandler={onSelectFilesHandler}
            />
          ) : isLoading || isContentLoading ? (
            <Styled.LoaderWrapper>
              <LoaderComponent theme="preview" />
            </Styled.LoaderWrapper>
          ) : (
            <ReceiptsList
              timeFilterValue={timeFilterValue}
              lastReceipts={lastReceipts}
              timeFilterOptions={timeFilterOptions}
              countPerTimeFilter={receipts?.count}
              onChangeCategoryFieldHandler={onChangeCategoryFieldHandler}
              dateFormat={company.date_format}
            />
          )}
        </Styled.RightSideContentWrapper>
      </Styled.MainWrapper>
    </Styled.LayoutWrapper>
  );
};
