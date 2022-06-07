import { Z_INDEX, COLORS } from 'app/theme';
import styled from 'styled-components';

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

export const Styles = {
  Form: styled.form``,
};
