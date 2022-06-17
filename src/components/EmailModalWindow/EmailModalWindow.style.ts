import { styled } from 'app/theme';

import { overlay, modalContentStyles } from 'constants/modal-window.constants';

export const EmailModalStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '703px',
    maxHeight: '640px',
  },
  overlay,
};

export const Styles = {
  Form: styled.form``,
};
