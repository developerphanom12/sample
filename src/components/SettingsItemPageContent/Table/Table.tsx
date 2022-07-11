import { TableSettings } from '../../Table/TableSettings';
import { TableSettingsCompany } from '../../Table/TableSettings/TableSettingsCompany';

interface ITableProps {
  isMemeberList?: boolean;
  members?: IMember[];
  searchedUsers?: IMember[];
  companies?: ICompanySettings[];
  searchValue: string;
  userRole: TRoles;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
}
export const Table = (props: ITableProps) => {
  const {
    isMemeberList,
    searchValue,
    userRole,
    members,
    searchedUsers,
    companies,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;
  return (
    <>
      {isMemeberList ? (
        <TableSettings
          searchValue={searchValue}
          searchedUsers={searchedUsers}
          members={members}
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
      ) : (
        <TableSettingsCompany
          isCompanyTable={true}
          companies={companies}
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
        />
      )}
    </>
  );
};
