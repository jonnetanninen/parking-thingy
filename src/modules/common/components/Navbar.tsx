import css from './Navbar.module.scss';
import logo from '../../../assets/COOL_LOGO.png';

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <img alt="Logo" src={logo} height="48" width="80" />
        <div>
          <button className={css.langButton}>fi</button>
          <span className={css.separator}>|</span>
          <button className={css.langButton}>en</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
