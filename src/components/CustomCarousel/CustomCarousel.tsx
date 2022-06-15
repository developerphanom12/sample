import { FC } from 'react';
import Carousel, { RenderArrowProps } from 'react-elastic-carousel';

import { CustomCarouselStyles as Styled } from './CustomCarousel.style';
import { RenderArrow } from './RenderArrow';

interface ICustomCarouselProps {
  children: React.ReactElement[];
}
export const CustomCarousel: FC<ICustomCarouselProps> = (props) => {
  const { children } = props;
  return (
    <Styled.SliderWrapper>
      <Carousel
        pagination={false}
        isRTL={false}
        enableSwipe={true}
        itemsToShow={8}
        disableArrowsOnEnd
        showEmptySlots
        itemPadding={[0, 5]}
        renderArrow={(props: RenderArrowProps) => RenderArrow(props)}
      >
        {children}
      </Carousel>
    </Styled.SliderWrapper>
  );
};
