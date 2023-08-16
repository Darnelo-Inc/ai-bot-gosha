import { FC } from "react"
import styles from "../scss/modules/Header.module.scss"

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Bot Chat</h1>
      <span>AI-based service</span>
    </header>
  )
}

export default Header
