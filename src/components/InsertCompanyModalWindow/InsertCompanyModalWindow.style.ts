import { styled } from 'app/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const CompanyModalWindowStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '703px',
    maxHeight: '400px',
  },
  overlay,
};
export const InsertCompanyModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 37px 33px 32px 33px;
    width: 100%;
    flex: 1;
  `,
};
