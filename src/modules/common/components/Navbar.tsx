import css from './Navbar.module.scss';
import logo from '../../../assets/COOL_LOGO.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={css.container}>
      <div className={css.content}>
        <img alt="Logo" src={logo} height="48" width="80" />
        <div>
          <button
            style={currentLang === 'fi' ? { color: '#05081f' } : {}}
            className={css.langButton}
            onClick={() => handleLanguageChange('fi')}
          >
            fi
          </button>
          <span className={css.separator}>|</span>
          <button
            style={currentLang === 'en' ? { color: '#05081f' } : {}}
            className={css.langButton}
            onClick={() => handleLanguageChange('en')}
          >
            en
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
