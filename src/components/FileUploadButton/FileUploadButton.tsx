import React, { FC } from 'react';
import { UploadInput } from '../UploadInput';

import { FileUploadButtonStyles as Styled } from './FileUploadButton.style';

interface IFileUploadButtonProps {
  onChangeFiles?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUploadButton: FC<IFileUploadButtonProps> = (props) => {
  const { onChangeFiles } = props;

  return (
    <Styled.ButtonWrapper>
      <UploadInput onChangeFiles={onChangeFiles} />
      <Styled.Label htmlFor="uploadFile">Add</Styled.Label>
    </Styled.ButtonWrapper>
  );
};
