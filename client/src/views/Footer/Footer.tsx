import { useThemeColorContext } from '../../contexts/ThemeContext';

function Footer(): JSX.Element {
  const theme = useThemeColorContext();

  return (
    <div className={`w-full h-16 ${theme.bg100} flex justify-center items-center`}>
      <div onClick={() => window.open('https://github.com/khaifahmi99')}>
        <h1 className={`font-semibold ${theme.text600} hover:font-bold hover:italic`}>Designed & Build by Khai Fahmi Zaki</h1>
      </div>
    </div>
  );
}

export default Footer;
