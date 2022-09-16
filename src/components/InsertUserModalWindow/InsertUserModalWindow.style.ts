import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const UserModalWindowStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '703px',
    maxHeight: '569px',
  },
  overlay,
};

export const InsertUserModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 37px 33px 54px 33px;
    width: 100%;
    flex: 1;
  `,
  SelectWrapper: styled.div`
    width: 100%;
  `,
  Form: styled.form``,
  InputsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    flex: 1;
  `,
};
