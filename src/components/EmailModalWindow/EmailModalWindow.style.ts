import { Z_INDEX, COLORS, styled } from 'app/theme';

export const EmailModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '703px',
    maxHeight: '742px',
    overflow: 'none',
    padding: 0,
    borderRadius: 0,
    boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.05)',
  },
  overlay: {
    background: COLORS.overlay,
    zIndex: Z_INDEX.l,
  },
};

export const EmailModalWindowStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 21px 33px 0 33px;
    width: 100%;
    flex: 1;
  `,
  SubTitle: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    line-height: 19px;
    margin: 32px 0 25px 0;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
  AttachmentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-height: 90px;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 26px;
    border-radius: 5px;
  `,
};
