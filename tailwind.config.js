/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];

export const safelist = [
  {
    pattern: /bg-/,
    variants: ['hover', 'focus']
  }
];
export const theme = {
  extend: {
    fontFamily: {
      'unbounded': ['Unbouded'],
      'inter': '"Inter tight"'
    },
    colors: {
      accent: {
        blue: '#2678FB',
        orange: '#F76507',
        pink: '#F2018B',
        yellow: '#D0FE56',
      },
      background: {
        container: '#FAFBFF',
        content: '#E5EFFF',
        controls: '#C2D9FD',
        pink: {
          100: '#F2018B',
          200: '#FFA9DA',
          300: '#FFE3F4'
        },
        orange: {
          100: '#F76507',
          200: '#FDAE7B',
          300: '#FFE7D8'
        }
      },
      main: {
        active: '#5AA4FB',
        disable: '#C5D2E7',
        focus: '#1B5FCC',
        hover: '#9EC4FF',
        primary: '#2678FB',
      },
      text: {
        button: '#000000',
        disable: '#B5B5B5',
        header: '#2B2B2D',
        main: '#636363',
        white: '#FFFFFF'
      },
      function: {
        success: {
          active: '#00BD40',
          hover: '#4DD179',
          focus: '#00A136'
        },
        warning: {
          active: '#F59728',
          hover: '#F8B669',
          focus: '#D08022'
        },
        danger: {
          primary: '#F84141',
          active: '#BD0000',
          hover: '#D14D4D',
          focus: '#A10000'
        } 
      }
    }
  },
  
};
export const plugins = [];

