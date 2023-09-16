import { FC, useState, useEffect } from "react"
import { useSendMessageMutation } from "../api/chatApi"
import styles from "../scss/modules/ChatWindow.module.scss"
import TypeLine from "./TypeLine"

const ChatWindow: FC = () => {
  const [messages, setMessages] = useState<string[]>([""])
  const [sendMessage] = useSendMessageMutation()

  useEffect(() => {
    const printBotMessage = async (text: string) => {
      for (let i = 0; i < text.length; i++) {
        await new Promise((res) => setTimeout(res, 50))
        setMessages((prev) => [
          ...prev.slice(0, -1),
          prev[prev.length - 1] + text[i],
        ])
      }
    }

    printBotMessage("Ask me anything!").then(() => {
      setMessages((prev) => [...prev, ""])
    })
  }, [])

  const handleSend = async (message: string) => {
    if (message.trim()) {
      setMessages((prev) => [...prev, message])
      const response = await sendMessage(message)
      if ("error" in response) {
        console.error(response)
      } else {
        setMessages((prev) => [...prev, response.data])
      }
    }
  }

  return (
    <>
      <div className={styles["chat-window"]}>
        {messages.map((message, index) => {
          const isUserMessage = index % 2 !== 0
          const avatarSrc = isUserMessage
            ? "./user_avatar.svg"
            : "./bot_avatar.svg"
          const textClass = isUserMessage
            ? styles["message-text--user"]
            : styles["message-text--bot"]
          return (
            <div
              className={[
                styles.message,
                isUserMessage && styles.user__msg,
              ].join(" ")}
              key={index}
            >
              <img src={avatarSrc} alt="Avatar" className={styles.avatar} />
              <div className={[styles["message-text"], textClass].join(" ")}>
                {message}
              </div>
            </div>
          )
        })}
      </div>
      <TypeLine handleSend={handleSend} />
    </>
  )
}

export default ChatWindow
