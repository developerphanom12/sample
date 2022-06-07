import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFILES_UPLOAD_PREVIEW_INITIAL_STATE } from '../types/filesUploadPreview.types';

export const FILES_UPLOAD_PREVIEW_INITIAL_STATE: IFILES_UPLOAD_PREVIEW_INITIAL_STATE =
  {
    previewFiles: [],
    filesArray: [],
  };

const initialState = FILES_UPLOAD_PREVIEW_INITIAL_STATE;

export const FilesUploadPreviewSlice = createSlice({
  name: 'filesUploadPreviewSlice',
  initialState,
  reducers: {
    deleteFile: (
      state: IFILES_UPLOAD_PREVIEW_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.filesArray = state.filesArray.filter(
        (file) => file.name !== action.payload
      );
      state.previewFiles = state.previewFiles.filter(
        (src) => src.fileName !== action.payload
      );
    },
    resetState: () => initialState,
    setFiles: (
      state: IFILES_UPLOAD_PREVIEW_INITIAL_STATE,
      action: PayloadAction<IFILES_UPLOAD_PREVIEW_INITIAL_STATE>
    ) => {
      state.filesArray = action.payload.filesArray;
      state.previewFiles = action.payload.previewFiles;
    },
  },
});

export const { setFiles, resetState, deleteFile } =
  FilesUploadPreviewSlice.actions;

export const filesUploadReducer = FilesUploadPreviewSlice.reducer;
