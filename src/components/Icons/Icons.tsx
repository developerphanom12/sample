import { FunctionComponent, SVGProps } from 'react';

import { ReactComponent as showPassword } from 'assets/icons/show-password.svg';
import { ReactComponent as capiumLogo } from 'assets/icons/capium-icon.svg';
import { ReactComponent as arrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as arrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as arrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as checkmark } from 'assets/icons/checkmark.svg';
import { ReactComponent as searchIcon } from 'assets/icons/search-icon.svg';
import { ReactComponent as calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as warning } from 'assets/icons/warning.svg';
import { ReactComponent as closeWindow } from 'assets/icons/close-window-icon.svg';
import { ReactComponent as avatar } from 'assets/icons/avatar.svg';
import { ReactComponent as notification } from 'assets/icons/bell.svg';
import { ReactComponent as checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as infoIcon } from 'assets/icons/info-icon.svg';
import { ReactComponent as accountIcon } from 'assets/icons/account-icon.svg';
import { ReactComponent as edit } from 'assets/icons/edit.svg';
import { ReactComponent as hidePassword } from 'assets/icons/hide-password.svg';
import { ReactComponent as remove } from 'assets/icons/remove.svg';
import { ReactComponent as accepted } from 'assets/icons/approved.svg';
import { ReactComponent as awaitingApproval } from 'assets/icons/awaiting-approval.svg';
import { ReactComponent as completed } from 'assets/icons/completed.svg';
import { ReactComponent as rejected } from 'assets/icons/decline.svg';
import { ReactComponent as metric } from 'assets/icons/metric.svg';
import { ReactComponent as processing } from 'assets/icons/processing.svg';
import { ReactComponent as review } from 'assets/icons/review.svg';
import { ReactComponent as shadowedMetric } from 'assets/icons/shadowed-metric.svg';
import { ReactComponent as settingsAvatar } from 'assets/icons/settings-avatar.svg';
import { ReactComponent as deletePhotoIcon } from 'assets/icons/delete-photo-icon.svg';
import { ReactComponent as threeDots } from 'assets/icons/three-dots.svg';
import { ReactComponent as receiptHubLogo } from 'assets/icons/receiptHub-logo.svg';
import { ReactComponent as active } from 'assets/icons/active.svg';
import { ReactComponent as insertLogo } from 'assets/icons/insert-logo.svg';
import { ReactComponent as cloudUpload } from 'assets/icons/cloud-upload.svg';
import { ReactComponent as dropDownArrow } from 'assets/icons/dropdown-arrow.svg';
import { ReactComponent as tableArrow } from 'assets/icons/table-arrow.svg';
import { ReactComponent as smallSearchIcon } from 'assets/icons/small-search-icon.svg';

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  smallSearchIcon,
  tableArrow,
  dropDownArrow,
  cloudUpload,
  insertLogo,
  receiptHubLogo,
  deletePhotoIcon,
  settingsAvatar,
  accountIcon,
  hidePassword,
  infoIcon,
  showPassword,
  capiumLogo,
  arrowDown,
  arrowRight,
  arrowLeft,
  checkmark,
  searchIcon,
  calendar,
  warning,
  closeWindow,
  avatar,
  notification,
  checkbox,
  edit,
  remove,
  accepted,
  awaitingApproval,
  completed,
  rejected,
  metric,
  processing,
  review,
  shadowedMetric,
  threeDots,
  active,
};

export const Icon = (props: {
  className?: string;
  fill?: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number;
  maxHeight?: number;
  borderRadius?: number | string;
  key?: string;
  id?: string;
  type: string;
}) => {
  const NewIcon = ICONS[props.type];
  if (!NewIcon) {
    return null;
  }

  return (
    <NewIcon
      id={props.id}
      style={{
        borderRadius: props.borderRadius,
        fill: props.fill,
        width: props.width,
        height: props.height,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
      }}
      className={props.className}
    />
  );
};
