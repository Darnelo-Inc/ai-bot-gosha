import { FC, useState } from "react"
import styles from "../scss/modules/TypeLine.module.scss"

interface TypeLineProps {
  handleSend: (message: string) => void
}

const TypeLine: FC<TypeLineProps> = ({ handleSend }) => {
  const [message, setMessage] = useState("")

  const handleSendClick = () => {
    if (message.trim() !== "") {
      handleSend(message)
      setMessage("")
    }
  }

  return (
    <div className={styles["chat-container"]}>
      <textarea
        className={styles["chat-textarea"]}
        placeholder="Start typing here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className={styles["send-button"]}
        onClick={handleSendClick}
      ></button>
    </div>
  )
}

export default TypeLine
