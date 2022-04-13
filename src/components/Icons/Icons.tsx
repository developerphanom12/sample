import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as showPassword } from '../../assets/icons/show-password.svg';
import { ReactComponent as capiumLogo } from '../../assets/icons/capium-icon.svg';
import { ReactComponent as arrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as arrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as searchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as warning } from '../../assets/icons/warning.svg';
import { ReactComponent as closeWindow } from '../../assets/icons/close-window-icon.svg';
import { ReactComponent as avatar } from '../../assets/icons/avatar.svg';
import { ReactComponent as notification } from '../../assets/icons/bell.svg';
import { ReactComponent as checkbox } from '../../assets/icons/checkbox.svg';
import { ReactComponent as infoIcon } from '../../assets/icons/info-icon.svg';
import { ReactComponent as accountIcon } from '../../assets/icons/account-icon.svg';
import { ReactComponent as edit } from '../../assets/icons/edit.svg';
import { ReactComponent as remove } from '../../assets/icons/remove.svg';

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  accountIcon,
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
};

export const Icon = (props: {
  type: string;
  className?: string;
  fill?: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number;
  maxHeight?: number;
  borderRadius?: number | string;
  key?: string;
  id?: string;
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
