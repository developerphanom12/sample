import { useDispatch } from 'react-redux';
import { Location, useNavigate } from 'react-router';

import { setFiles } from 'screens/FilesUploadPreview/reducer';

import { MAX_FILE_SIZE } from 'constants/strings';

interface ISelectFilesProps {
  files: FileList | null;
  location: Location;
  route: string;
}

export const useSelectFiles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelectFilesHandler = (props: ISelectFilesProps) => {
    const { files, location, route } = props;
    if (!files?.length) return;

    const selectedFilesArray = Array.from(files);
    let imagesArray: {
      fileSrc: string;
      fileName: string;
      fileType: string;
    }[] = [];

    selectedFilesArray?.forEach((file, ind) => {
      if (
        !file.type.match(/image|application\/pdf/g) ||
        file.size >= MAX_FILE_SIZE
      ) {
        return;
      }
      imagesArray.push({
        fileSrc: URL.createObjectURL(file),
        fileName: file.name,
        fileType: file.type,
      });
    });
    dispatch(
      setFiles({ filesArray: selectedFilesArray, previewFiles: imagesArray })
    );
    navigate(route, { state: { from: location } });
  };

  return onSelectFilesHandler;
};
