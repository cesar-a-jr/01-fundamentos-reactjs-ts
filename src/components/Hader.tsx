import styles from './Header.module.css'

import igniteLogo from '../assets/IgniteLogo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

export default Header;