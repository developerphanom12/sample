import { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { ActionMeta } from 'react-select';

import { ActionsMenu } from 'components/ActionsMenu';
import { HeaderPanel } from 'components/HeaderPanel';

export const ActionsPanel = () => {
  return (
    <>
      <HeaderPanel
        datePickerRef={undefined as any}
        onDeleteReceiptHandler={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
        onMarkAsPaidButtonHandler={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
        onClickDownloadCSVButtonHandler={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
        onSelectFilesHandler={function (
          event: ChangeEvent<HTMLInputElement>
        ): void {}}
        onChangeStatusValueHandler={function (
          newValue: unknown,
          actionMeta: ActionMeta<unknown>
        ): void {}}
        statusValue={undefined as any}
        onChangeSearchValueHandler={function (
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ): void {}}
        searchValue={''}
        onChangeDate={function (date: Date): void {}}
        onClickOutsideDatePickerHandler={function (
          event: MouseEvent<HTMLDivElement>
        ): void {}}
        isDatePickerOpen={false}
        dateValue={null}
        setIsDatePickerOpen={function (): void {}}
        formattedDate={''}
        onActionsClose={function (): void {}}
        onEmailClick={function (): void {}}
        showActions={false}
        isDownloadButtonDisabled={false}
        onDownloadExcelFileHandler={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
      />
      <ActionsMenu
        csvLink={undefined as any}
        csvData={''}
        excelRef={undefined as any}
        excelUrl={''}
        isSentSuccessPopup={false}
        closeSuccesPopupHandler={function (): void {}}
        onCloseModalWindowHandler={function (): void {}}
        isModalWindowOpen={false}
        onFormHandleSubmit={function (
          e?: FormEvent<HTMLFormElement> | undefined
        ): void {}}
        formikProps={function (nameOrOptions: string) {}}
        formikMeta={function (name: string) {}}
        isValid={false}
        isLoading={false}
        checkedIds={[]}
      />
    </>
  );
};
