import React from 'react';

declare global {
  interface IusePhotoDetailsContentState {
    statusValue: string;
    categoryValue: IOption | any;
    typeValue: SingleValue<IOption> | any;
    dateValue: Date | null;
    supplierValue: IOption | any;
    currencyValue: SingleValue<IOption> | any;
    currencyValueId: string;
    taxValue: number | null;
    supplierAccountValue: string;
    totalValue: number | null;
    descriptionValue: string;
    vatCodeValue: string;
    netValue: number | null;
    publishStatus: boolean;
    paymentStatus: boolean;
    radioButtonValue: string | null;
    isOpen: boolean;
    isLoading: boolean;
    formattedDate: string;
    imageSrc: any;
  }

  interface IHeaderPanelProps {
    datePickerRef: React.RefObject<HTMLButtonElement>;
    onDeleteReceiptHandler: () => Promise<void>;
    onMarkAsPaidButtonHandler: () => Promise<void>;
    onClickDownloadCSVButtonHandler: () => Promise<void>;
    onSelectFilesHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeStatusValueHandler: (
      newValue: unknown,
      actionMeta: ActionMeta<unknown>
    ) => void;
    statusValue: IOption;
    onChangeSearchValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    searchValue: string;
    onChangeDate: (date: Date) => void;
    onClickOutsideDatePickerHandler: (
      event: React.MouseEvent<HTMLDivElement>
    ) => void;
    isDatePickerOpen: boolean;
    dateValue: Date | null;
    setIsDatePickerOpen: () => void;
    formattedDate: string;
    onActionsClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onActionsClose: () => void;
    onEmailClick: () => void;
    showActions: boolean;
    isDownloadButtonDisabled: boolean;
    onDownloadExcelFileHandler: () => Promise<void>;
  }

  interface IUpdateReceiptItemPayload {
    id: string;
    category?: string | null;
    currency?: string | null;
    description?: string | null;
    net?: number | null;
    photos?: string[];
    receipt_date?: Date | null;
    status?: string;
    supplier?: string | null;
    supplier_account?: string | null;
    tax?: number | null;
    total?: number | null;
    payment_type?: string | null;
    vat_code?: string | null;
    publish_status?: boolean;
    payment_status?: boolean;
  }

  interface IPagination {
    onChangeInputValue: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    inputPaginationValue: string;
    onGoToClick: () => void;
    onEnterGoToClick: (event: React.KeyboardEvent) => void;
    onChangePage?: ({ selected: number }) => void;
    onForwardClick: () => void;
    onBackwardClick: () => void;
    currentPage: number;
    pages: number;
  }

  interface IPaginationPanel extends IPagination {
    onChangeReceiptsPerPage: (newValue: SingleValue<IOption>) => void;
    receiptsPerPage: { value: string; label: string };
  }

  interface IPaginationData {
    selected: number;
  }

  interface ICreator {
    id: string;
    name: string;
    role: string;
  }

  interface ITabItem {
    id: string;
    created: string;
    name: string;
    creator: ICreator;
  }

  interface TableInboxAdminProps {
    isReceipts?: boolean;
    onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedAllItemsHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onCheckedPublishMockFuncHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    isVisited: boolean;
    receiptList: IReceipt[];
    isAllChecked: boolean;
    onCheckedPaidHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    dateFormat: string;
  }

  interface IReceipt {
    category: ISelectItem | null;
    currency: ICurrency;
    description: string | null;
    id: string;
    custom_id: string;
    net: number | null;
    photos: string[];
    receipt_date: Date;
    status: string;
    supplier: ISelectItem | null;
    supplier_account: string | null;
    tax: number | null;
    total: number | null;
    payment_type: ISelectItem | null;
    vat_code: string | null;
    publish_status: boolean;
    payment_status: boolean;
    isChecked: boolean;
  }

  interface IInboxContent
    extends IHeaderPanelProps,
      TableInboxAdminProps,
      IPagination {
    isContentLoading: boolean;
    onChangeReceiptsPerPage: (newValue: unknown) => void;
    receiptsPerPage: { value: string; label: string };
    receipts: IReceipt[];
    isFetchingReceipts: boolean;
    datePickerRef: React.RefObject<HTMLButtonElement>;
  }

  interface IOption {
    value: string;
    label: string;
    id?: string;
    [key: string]: string | undefined;
  }

  enum Statuses {
    processing = 'processing',
    review = 'review',
    accepted = 'accepted',
    rejected = 'rejected',
  }

  interface IEmailModalWindowProps {
    onCloseModalWindowHandler: () => void;
    isModalWindowOpen: boolean;
    onFormHandleSubmit: (
      e?: React.FormEvent<HTMLFormElement> | undefined
    ) => void;
    formikProps: (nameOrOptions: string) => FieldInputProps<string>;
    formikMeta: (name: string) => FieldMetaProps<string>;
    isValid: boolean;
    isLoading: boolean;
    checkedIds: string[];
  }

  type TStatuses = keyof typeof Statuses;

  enum Roles {
    owner = 'owner',
    user = 'regular user',
    admin = 'admin',
  }
  type TRoles = keyof typeof Roles;

  interface ICompanySettings {
    date_format: string;
    id: string;
    name: string;
  }
  interface TableSettingsProps {
    companies?: ICompanySettings[];
    userRole: TRoles;
    onDeleteIconClickHandler: (itemId: string) => void;
    onEditIconClickHandler: (itemId: string) => void;
  }
  interface TableSettingsItemProps {
    userRole: TRoles;
    onDeleteIconClickHandler: (itemId: string) => void;
    onEditIconClickHandler: (itemId: string) => void;
  }

  interface TableCompanySettingsItemProps extends TableSettingsItemProps {
    companyName: string;
  }

  interface IMasterModalWindowProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;
    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
  }

  interface IDeleteModalWindowProps {
    isLoading: boolean;
    onCloseDeleteModalWindowHandler: () => void;
    onDeleteButtonClickHandler: () => Promise<void>;
    isDeleteModalWindowOpen: boolean;
    deleteItemName: string;
  }

  interface IModalWindowsBox
    extends IMasterModalWindowProps,
      IDeleteModalWindowProps {}

  interface IPaginationState {
    itemsPerPage: SingleValue<IOption> | any;
    skipItems: number;
    currentPage: number;
    inputPaginationValue: string;
    pages: number;
    forwardDisabled: boolean;
    backwardDisabled: boolean;
  }
  interface IMember {
    id: string;
    name: string;
    role: TRoles;
    email?: string;
  }
  interface IMemberTableProps extends TableSettingsProps {
    members?: IMember[];
    searchedUsers?: IMember[];
    searchValue: string;
  }
  interface ISearchParams {
    search?: string;
    take?: number;
    skip?: number;
  }

  interface IAccount {
    id: string;
    name: string;
    role: string;
  }
}

export {
  IAccount,
  TableCompanySettingsItemProps,
  ICompanySettings,
  ISearchParams,
  IMemberTableProps,
  IMember,
  IModalWindowsBox,
  IPaginationState,
  TableSettingsProps,
  TRoles,
  IMasterModalWindowProps,
  IDeleteModalWindowProps,
  TStatuses,
  IEmailModalWindowProps,
  IusePhotoDetailsContentState,
  IHeaderPanelProps,
  IUpdateReceiptItemPayload,
  IPagination,
  IPaginationData,
  ITabItem,
  IInboxContent,
  TableInboxAdminProps,
  IReceipt,
  IPaginationPanel,
  IOption,
};
