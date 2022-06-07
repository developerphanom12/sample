import React, { FC } from 'react';

import { FileUploadButtonStyles as Styled } from './FileUploadButton.style';

interface IFileUploadButtonProps {
  onChangeFiles?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUploadButton: FC<IFileUploadButtonProps> = (props) => {
  const { onChangeFiles } = props;

  return (
    <Styled.ButtonWrapper>
      <Styled.UploadInput
        onChange={onChangeFiles}
        type="file"
        id="uploadFile"
        name="uploadFile"
        accept="image/jpeg, image/jpg, image/png"
      />
      <Styled.Label htmlFor="uploadFile">Add</Styled.Label>
    </Styled.ButtonWrapper>
  );
};
