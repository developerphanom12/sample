import { Z_INDEX, COLORS, styled } from 'styles/theme';

export const SuccessModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '400px',
    maxHeight: '270px',
    height: '100%',
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

export const SuccessModalWindowStyle = {
  Circle: styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: ${({ theme }) => `5px solid ${theme.colors.green}`};
    margin-bottom: 25px;
  `,
  IconWrapper: styled.div`
    margin-bottom: 25px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  Checkmark: styled.div`
    transform: rotate(45deg) translate(-90%);
    width: 17px;
    height: 23px;
    border-bottom: ${({ theme }) => `3px solid ${theme.colors.green}`};
    border-right: ${({ theme }) => `3px solid ${theme.colors.green}`};
    position: absolute;
    top: 42%;
    left: 55%;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 30px;
  `,
};
