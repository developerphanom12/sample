import { COLORS, Z_INDEX } from 'styles/theme';

export const overlay = {
  background: COLORS.overlay,
  zIndex: Z_INDEX.l,
};

export const modalContentStyles = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  overflow: 'none',
  padding: 0,
  borderRadius: '6px',
  boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.05)',
};
