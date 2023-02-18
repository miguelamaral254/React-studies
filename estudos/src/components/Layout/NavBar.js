import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function NavBar() {
  return (

    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.li} to='/'>Home</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.li} to='/empresa'>Empresa</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.li} to='/contato'>Contato</Link>
      </li>
    </ul>

  )
}
export default NavBar