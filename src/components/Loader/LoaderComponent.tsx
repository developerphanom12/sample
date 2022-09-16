import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { COLORS } from 'styles/theme';

import { LoaderComponentStyles } from './LoaderComponent.style';

interface ILoaderComponentProps {
  theme?: 'preview';
}
export const LoaderComponent: FC<ILoaderComponentProps> = (props) => {
  const { theme } = props;

  return (
    <LoaderComponentStyles.Wrapper data-testid="loader">
      <TailSpin
        color={theme === 'preview' ? COLORS.orange : COLORS.white}
        height={theme ? 40 : 20}
        width={theme ? 40 : 20}
      />
    </LoaderComponentStyles.Wrapper>
  );
};
