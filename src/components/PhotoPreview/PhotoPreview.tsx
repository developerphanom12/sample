import { FC } from 'react';

import { LoaderComponent } from '../Loader';
import { PhotoPreviewStyles } from './PhotoPreview.style';

interface IPhotoPreviewProps {
  imageSrc: string;
  isImageLoading: boolean;
}

export const PhotoPreview: FC<IPhotoPreviewProps> = (props) => {
  const { imageSrc, isImageLoading } = props;
  return (
    <PhotoPreviewStyles.Wrapper>
      {isImageLoading ? (
        <LoaderComponent theme="preview" />
      ) : (
        <PhotoPreviewStyles.Content imageSrc={imageSrc} />
      )}
    </PhotoPreviewStyles.Wrapper>
  );
};
