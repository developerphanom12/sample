import { useState } from 'react';

export const useUploadPhoto = () => {
  const [fileData, setFileData] = useState({ fileName: '', fileSrc: '' });

  const onChangeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !event.target.files?.length ||
      !event.target.files[0].type.match('image')
    )
      return;

    setFileData({
      fileName: event.target.files[0].name,
      fileSrc: URL.createObjectURL(event.target?.files[0]),
    });
  };
  return { fileData, onChangeFileHandler };
};
