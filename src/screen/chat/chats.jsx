import { useState, useEffect } from "react";
import { ChatList } from "../../components/chatList/ChatList";
import { ChatForm } from "../../components/chatForm/СhatForm"
import { Redirect, useParams } from "react-router-dom";

export const Chats = () => {
    const [list] = useState([
        { name: 'John', id: 'userId0000' },
        { name: 'Mark', id: 'userId0001' },
    ])
    const { chatId } = useParams()

    const [messageList, setMessageList] = useState([]);
    const changeMessageList = (newMessage) => {
        const counterId = messageList.reduce((acc, el) => { if (el.chatAuthor === newMessage.chatAuthor) { acc++ } return acc }, 0);
        newMessage.id = newMessage.chatAuthor + counterId
        setMessageList([...messageList, newMessage])
    }
    useEffect(() => {
        if (messageList.length !== 0) {
            const timer = setTimeout(() => {
                alert('сообщение от ' + messageList[messageList.length - 1].chatAuthor + ' отправленно')
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [messageList]);

    if (chatId === undefined) {
        return (
            <div className="container">
                <ChatList list={list}></ChatList>
            </div>
        )
    } else if (list.findIndex((el) => { return el.id === chatId }) === -1) {
        return (<Redirect to="/not-found"></Redirect>)
    }


    return (
        <div className="chatWindow container">
            <ChatList list={list}></ChatList>
            <div className="chatWindow__messageWindow">
                <div className="chatWindow__messageList">
                    {messageList.map((el) => {
                        return <div key={el.id} className="chatMessage" id={el.id}>
                            <p className="chatMessage__author">{el.chatAuthor}</p>
                            <p className="chatMessage__text">{el.chatText}</p>
                        </div>
                    })}
                </div>
                <ChatForm changeMessageList={changeMessageList} />
            </div>
        </div>
    )
}

