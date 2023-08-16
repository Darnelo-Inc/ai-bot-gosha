import { FC } from "react"
import styles from "../scss/modules/ChatWindow.module.scss"

const ChatWindow: FC = () => {
  return (
    <div className={styles["chat-window"]}>
      <div className={[styles.message, styles.user__msg].join(" ")}>
        <img src="./user_avatar.svg" alt="Avatar" className={styles.avatar} />
        <div
          className={[
            styles["message-text"],
            styles["message-text--user"],
          ].join(" ")}
        >
          Привет, как дела?
        </div>
      </div>
      <div className={styles.message}>
        <img src="./bot_avatar.svg" alt="Avatar" className={styles.avatar} />
        <div
          className={[styles["message-text"], styles["message-text--bot"]].join(
            " "
          )}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          saepe perferendis quia hic. Cumque repellendus vel possimus quod
          consectetur, sit aliquam mollitia sapiente temporibus nihil
          perferendis, architecto, consequatur error officia?
        </div>
      </div>
      <div className={[styles.message, styles.user__msg].join(" ")}>
        <img src="./user_avatar.svg" alt="Avatar" className={styles.avatar} />
        <div
          className={[
            styles["message-text"],
            styles["message-text--user"],
          ].join(" ")}
        >
          Тоже неплохо. Что нового?
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
