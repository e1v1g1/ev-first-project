

export const ChatList = (props) => {


    return (
        <div className='chatWindow__chatList chatList'>
            {props.list.map((el) => {
                return <div key={el.id} className="chatList__user">{el.name}</div>
            })}
        </div>
    )
}