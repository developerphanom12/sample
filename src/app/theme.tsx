import React from 'react';
import baseStyled, {
  ThemedStyledInterface,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const COLORS = {
  lightGray: '#F5F5F7',
  gray: '#C4C4C4',
  orange: '#FF5252',
  white: '#ffffff',
  black: '#222B38',
};

export const Z_INDEX = {
  minus: -1,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xxl: 9,
  xxxl: 10,
  max: 15,
};

export const theme = {
  colors: { ...COLORS },
  size: {
    normal: '15px',
    default: '14px',
    medium: '18px',
    mediumSmall: '13px',
    small: '10px',
    ultraSmall: '7px',
    title: '24px',
    mediumLarge: '20px',
    big: '32px'
  },
  font: {
    regular: 'regular',
  },
  zIndex: {
    ...Z_INDEX,
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

const GlobalStyle = createGlobalStyle`

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  * {
    ::-webkit-scrollbar
    {
      width: 2px;
      height: 2px;
      background-color: inherit;
    }
    ::-webkit-scrollbar-thumb
    {
      width: 2px;
      height: 2px;
      border-radius: 10px;
      background-color: #dadada;
    }
    user-select: none;
    text-decoration: none;
    outline: none;
  }
  input,textarea {
    user-select: all;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    margin: 0 auto;
    background-color: #fff;
    font-family: 'Avenir Next', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .no-evt * {
    pointer-events: none !important;
  }
  .google-visualization-tooltip-item * {
    color: white !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .google-visualization-tooltip-item::first-letter{
    font-weight: 900
  }
  .google-visualization-tooltip-item {
    padding: 0 0 0 10px  !important;
  }
  .google-visualization-tooltip {
    background-color: #151515 !important;
    min-width: 135px !important;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
