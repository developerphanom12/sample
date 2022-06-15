import { FC } from 'react';

import { Icon } from '../Icons';
import { useReceiptPreviewItemState } from './ReceiptPreviewItem.state';
import { ReceiptPreviewItemStyles as Styled } from './ReceiptPreviewItem.style';

interface IReceiptPreviewItemProps {
  isLastReceipt: boolean;
  imageSrc: string;
  isActive: boolean;
  fileName: string;
  onChooseReceiptHandler: (fileName: string, fileSrc: string) => void;
}
export const ReceiptPreviewItem: FC<IReceiptPreviewItemProps> = (props) => {
  const {
    imageSrc,
    fileName,
    isActive,
    isLastReceipt,
    onChooseReceiptHandler,
  } = props;

  const { onDeleteReceiptFile, onReceiptClickHandler } =
    useReceiptPreviewItemState({
      onChooseReceiptHandler,
      fileName,
      imageSrc,
      isLastReceipt,
    });

  return (
    <Styled.ItemWrapper isActive={isActive}>
      <Styled.ImageWrapper onClick={onReceiptClickHandler}>
        <Styled.Image isActive={isActive} src={imageSrc} alt={fileName} />
        <Styled.IconWrapper id={fileName} onClick={onDeleteReceiptFile}>
          <Icon type="deletePhotoIcon" />
        </Styled.IconWrapper>
      </Styled.ImageWrapper>
    </Styled.ItemWrapper>
  );
};
