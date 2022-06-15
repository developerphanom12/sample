import { FC } from 'react';
import { RenderArrowProps } from 'react-elastic-carousel';
import { SliderArrow } from '../SliderArrow/SliderArrow';

export const RenderArrow: FC<RenderArrowProps> = (props) => (
  <SliderArrow
    onClick={props.onClick}
    isDisabled={props.isEdge}
    isForwardButton={props.type === 'NEXT'}
  />
);
