import { styled } from 'app/theme';

export const InboxStyles = {
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  CSVLinkWrapper: styled.div`
    position: absolute;
  `,
  ExcelLink: styled.a`
    position: absolute;
    width: 0;
    height: 0;
  `,
};
