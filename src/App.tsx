import ChatWindow from "./components/ChatWindow"
import Header from "./components/Header"
import TypeLine from "./components/TypeLine"
import "./scss/index.scss"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <ChatWindow />
        <TypeLine />
      </div>
    </div>
  )
}

export default App
