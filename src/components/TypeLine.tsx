import { FC } from "react"
import styles from "../scss/modules/TypeLine.module.scss"

const TypeLine: FC = () => {
  return (
    <div className={styles["chat-container"]}>
      <textarea
        className={styles["chat-textarea"]}
        placeholder="Start typing here..."
      ></textarea>
      <button className={styles["send-button"]} />
    </div>
  )
}

export default TypeLine
