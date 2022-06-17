import Select from 'react-select';

import { styled } from 'app/theme';

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all 0.2s linear;
`;
export const SelectWrapper = styled.div`
  width: 100%;
`;
export const StyledReactSelect = styled(Select)<{
  marginBottom?: string;
  height?: string;
  paginate?: boolean;
  isFullWidth?: boolean;
}>`
  .Select__control {
    font-size: ${({ theme }) => theme.size.default};
    background: ${(props) => props.theme.colors.white};
    border: ${(props) =>
      `1px solid ${
        props.paginate
          ? props.theme.colors.gray
          : props.theme.colors.opacityBlack
      }`};
    box-sizing: border-box;
    box-shadow: ${(props) =>
      props.paginate ? '' : `0px 1px 1px ${props.theme.colors.boxShadowBlack}`};
    border-radius: 5px;
    width: 100%;
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '500px')};
    max-height: ${({ isMulti }) => (isMulti ? '100%' : '45px')};
    min-height: ${({ isMulti }) => (isMulti ? '45px' : '41.2px')};
    height: ${({ height, isMulti }) =>
      isMulti ? 'auto' : height ? `${height}px` : '100%'};
    cursor: pointer;
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${marginBottom}px` : '24px'};
  }
  .Select__control--is-focused {
    font-size: ${({ theme }) => theme.size.default};
    outline: none;
    background: ${({ theme }) => theme.colors.pink};
  }
  .Select__control--is-focused:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__control--is-disabled {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  .Select__menu {
    width: 100%;
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '500px')};
    padding: 3px 5px;
    font-size: ${({ theme }) => theme.size.default};
    margin-top: 1px;
  }
  .Select__option {
    border-radius: 5px;
    margin: 3px 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
  }
  .Select__option--is-selected {
    background: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.black};
  }
  .Select__option:hover {
    background: ${({ theme }) => theme.colors.pink};
  }
  .Select__indicators {
    padding-right: 5px;
  }
  .Select__single-value {
    font-size: ${({ theme }) => theme.size.default};
  }
  .css-b62m3t-container {
    height: 100% !important;
  }
  .Select__multi-value {
    width: 110px;
    height: 31px;
    background: ${({ theme }) => theme.colors.orange};
    box-shadow: ${({ theme }) =>
      `0px 1px 1px ${theme.colors.halfTranparentBlack}`};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
  .Select__multi-value__label {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    display: flex;
    align-items: center;
  }
`;
