import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as showPassword } from '../../assets/icons/show-password.svg';
import { ReactComponent as capiumLogo } from '../../assets/icons/capium-icon.svg';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as searchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as calendar } from '../../assets/icons/calendar.svg';

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  showPassword,
  capiumLogo,
  arrow,
  checkmark,
  searchIcon,
  calendar,
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
