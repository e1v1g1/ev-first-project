function Message(props) {
  return (
    <div className="Message">
      <h3 className="MessageHeader">Message:</h3>
      {props.message}
    </div>
  );
}

export default Message;
