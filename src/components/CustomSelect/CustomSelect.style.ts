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
}>`
  .Select__control {
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
    max-width: 500px;
    max-height: 45px;
    min-height: 41.2px;
    height: ${({ height }) => (height ? `${height}px` : '100%')};
    cursor: pointer;
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${marginBottom}px` : '24px'};
  }
  .Select__control--is-focused {
    outline: none;
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
    max-width: 500px;
    padding: 3px 5px;
    font-size: ${({ theme }) => theme.size.default};
  }
  .Select__option {
    border-radius: 5px;
    margin: 3px 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
  }
  .Select__option--is-selected {
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
  }
  .Select__option:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  .Select__indicators {
    padding-right: 5px;
  }
  .css-b62m3t-container {
    height: 100% !important;
  }
`;
