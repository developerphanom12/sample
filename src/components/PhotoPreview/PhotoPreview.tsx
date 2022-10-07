import { FC } from 'react';

import { LoaderComponent } from '../Loader';
import { PdfViewer } from '../PdfViewer';
import { PhotoPreviewStyles } from './PhotoPreview.style';

interface IPhotoPreviewProps {
  imageSrc: string;
  isImageLoading: boolean;
  isPDF: boolean;
}

export const PhotoPreview: FC<IPhotoPreviewProps> = (props) => {
  const { imageSrc, isImageLoading, isPDF } = props;
  return (
    <PhotoPreviewStyles.Wrapper>
      {isImageLoading ? (
        <LoaderComponent theme="preview" />
      ) : isPDF ? (
        <PdfViewer
          currentFileSrc={imageSrc}
          pageWidth={300}
          loaderStyle={'big'}
          isLoader={false}
        />
      ) : (
        <PhotoPreviewStyles.Content imageSrc={imageSrc} />
      )}
    </PhotoPreviewStyles.Wrapper>
  );
};
