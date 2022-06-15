import { FC } from 'react';

import { Icon } from '../Icons';
import { SliderArrowStyles } from './SliderArrow.style';

interface ISliderArrowProps {
  isForwardButton?: boolean;
  onClick: () => void;
  isDisabled: boolean;
}

export const SliderArrow: FC<ISliderArrowProps> = (props) => {
  const { onClick, isDisabled, isForwardButton } = props;
  return (
    <SliderArrowStyles.Wrapper
      isForwardButton={isForwardButton}
      disabled={isDisabled}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      <SliderArrowStyles.IconWrapper isForwardButton={isForwardButton}>
        <Icon type="arrowDown" />
      </SliderArrowStyles.IconWrapper>
    </SliderArrowStyles.Wrapper>
  );
};
