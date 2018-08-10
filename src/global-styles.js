import Aerobrush from './fonts/Aerobrush.ttf';

injectGlobal`
  @font-face {
    font-family: 'Aerobrush';
    src: url(${Aerobrush}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default injectGlobal;