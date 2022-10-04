import { styled, Z_INDEX } from 'styles/theme';

export const ActionMenuContentStyles = {
  CSVLinkWrapper: styled.div`
    position: absolute;
  `,
  ExcelLink: styled.a`
    position: absolute;
    width: 0;
    height: 0;
  `,
  SuccessPopupWrapper: styled.div`
    position: absolute;
    right: 0;
    z-index: ${Z_INDEX.s};
    top: 56px;
    max-width: 290px;
    width: 100%;
  `,
};
