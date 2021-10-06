import { StyledTheme, UsefulProperties } from '@theme/type';

const usefulProperties: UsefulProperties = {
  properties: {
    border: {
      radius: '4px',
    },
    boxShadow: '',
  },
};

export const darkTheme: StyledTheme = {
  color: {
    background: '#0d1117',
    topHeader: '#161b22',
    subHeader: '#22272e',
    border: '#373e47',
  },
  text: {
    bold: '#ffffff',
    plain: '#c9d1d9',
    smoke: '#8b949e',
    primary: '#ffffff',
    blue: '#58a6ff',
  },
  button: {
    default: '#21262d',
    smoke: '#272b32',
    primary: '#1d69e0',
  },
  ...usefulProperties,
};

export const lightTheme: StyledTheme = {
  color: {
    background: '#ffffff',
    topHeader: '#f5f8fa',
    subHeader: '#24292f',
    border: '#d5d8da',
  },
  text: {
    bold: '#000000',
    plain: '#24292f',
    smoke: '#57606a',
    primary: '#ffffff',
    blue: '#58a6ff',
  },
  button: {
    default: '#ffffff',
    smoke: '#f6f8fa',
    primary: '#0088ff',
  },
  ...usefulProperties,
};

export default {
  darkTheme,
  lightTheme,
};
