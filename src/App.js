import React, { useEffect, useState } from "react";
import "./App.css";
import { Message } from "./components/Message";
import { ChatForm } from "./components/ChatForm";

function App() {
  const text = "xxcvxc xcvxcvx xcvxcvx";

  const [messageList, setMessageList] = useState([]);
  const changeMessageList = (newMessage) => {
    setMessageList([...messageList, newMessage]);
  };

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        alert(
          "сообщение от " +
            messageList[messageList.length - 1].chatAuthor +
            " отправленно"
        );
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
        <div className="chatWindow container">
          {messageList.map((el, i) => {
            return (
              <div key={i} className="chatMessage">
                <p className="chatMessage-author">{el.chatAuthor}:</p>
                <p className="chatMessage-text">{el.chatText}</p>
              </div>
            );
          })}
        </div>

        <ChatForm changeMessageList={changeMessageList} />
      </header>
    </div>
  );
}

export default App;
