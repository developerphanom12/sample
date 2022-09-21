import React from 'react';

import { theme } from 'styles/theme';
import { Icon } from 'components/Icons/Icons';

import { TableButtonStyles } from './TableButton.style';

export type TableButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export const TableButton = (props: TableButtonProps) => {
  const { children, onClick } = props;
  return (
    <TableButtonStyles.Button onClick={onClick}>
      <TableButtonStyles.Content>{children}</TableButtonStyles.Content>
      <TableButtonStyles.Content>
        <Icon type="tableArrow" />
      </TableButtonStyles.Content>
    </TableButtonStyles.Button>
  );
};
