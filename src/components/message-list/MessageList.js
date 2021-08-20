import { useState } from "react";

export const MessageList = () => {
  const [list, setList] = useState(["text1", "text2", "text3"]);

  //const handleClick = () => {};

  return (
    <div>
      {list.map((element) => {
        return <div>{element}</div>;
      })}
    </div>
  );
};

export const MessageList1 = () => {
  const [messages, setMessages] = useState([
    "Message1",
    "Message2",
    "Message3",
  ]);

  //const handleClick = () => {};

  return messages.map((message) => <div>{message}</div>);
};
