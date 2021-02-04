import css from './Footer.module.scss';

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div>
          Uses <a href="https://p.hsl.fi/docs/index.html">"HSL Park and Ride API"</a> by{' '}
          <a href="https://hsl.fi">HSL</a> which is licensed under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
