import { useEffect, useRef, useState } from "react";
import { TextField } from '@material-ui/core';

export const ChatForm = (props) => {
    const [chatMessage, setChatMessage] = useState({ chatAuthor: '', chatText: '' });

    const handleChangeAuthor = (e) => { setChatMessage({ ...chatMessage, chatAuthor: e.target.value }) };

    const handleChangeMessage = (e) => { setChatMessage({ ...chatMessage, chatText: e.target.value }) };

    const autoFocusRef = useRef(null)

    useEffect(() => {
        autoFocusRef.current.focus()
    }, [])

    const handleSubmit = () => {
        props.changeMessageList(chatMessage);
        setChatMessage({ chatAuthor: '', chatText: '' });
    }
    return (
        <div className="chatInput">
            <TextField id="form_author" margin={"normal"} label="author" variant="outlined" onChange={handleChangeAuthor} value={chatMessage.chatAuthor} inputRef={autoFocusRef} />
            <TextField id="form_text" margin={"normal"} label="text" variant="outlined" onChange={handleChangeMessage} value={chatMessage.chatText} maxRows={3} multiline={true} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}