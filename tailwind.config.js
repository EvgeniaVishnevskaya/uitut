/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
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
        controls: '#C2D9FD'
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
      }
    }
  },
  
};
export const plugins = [];

