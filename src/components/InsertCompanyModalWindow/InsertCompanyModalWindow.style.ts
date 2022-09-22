import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const CompanyModalWindowStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '420px',
    maxHeight: '340px',
  },
  overlay,
};
export const InsertCompanyModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 33px 22px 33px;
    width: 100%;
    flex: 1;
  `,
};
