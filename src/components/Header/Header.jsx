import styles from './Header.module.css';
import devLogo from '../../assets/logo.svg';
export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={devLogo}
        alt="logotipo do ignite"
      />
    </header>
  );
};
