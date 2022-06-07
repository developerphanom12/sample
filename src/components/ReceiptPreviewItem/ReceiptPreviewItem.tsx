import { FC } from 'react';

import { Icon } from '../Icons';
import { useReceiptPreviewItemState } from './ReceiptPreviewItem.state';
import { ReceiptPreviewItemStyles as Styled } from './ReceiptPreviewItem.style';

interface IReceiptPreviewItemProps {
  imageSrc: string;
  altName: string;
  isActive: boolean;
}
export const ReceiptPreviewItem: FC<IReceiptPreviewItemProps> = (props) => {
  const { imageSrc, altName, isActive } = props;

  const onDeleteReceiptFile = useReceiptPreviewItemState();

  return (
    <Styled.ItemWrapper isActive={isActive}>
      <Styled.ImageWrapper>
        <Styled.Image src={imageSrc} alt={altName} />
        <Styled.IconWrapper id={imageSrc} onClick={onDeleteReceiptFile}>
          <Icon type="deletePhotoIcon" />
        </Styled.IconWrapper>
      </Styled.ImageWrapper>
    </Styled.ItemWrapper>
  );
};
