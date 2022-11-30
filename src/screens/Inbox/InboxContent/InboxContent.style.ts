import { styled, Z_INDEX } from 'styles/theme';

export const InboxContentStyles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 21px 30px;
    flex: 1 0 auto;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: ${Z_INDEX.xs};
  `,
  TableWrapper: styled.div`
    position: relative;
  `,
};
