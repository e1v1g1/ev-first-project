import "./App.css";
import Message from "./Message";

const message =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first react app
        <h3>Hello, {props.name}!</h3>
        <Message message={message} />
      </header>
    </div>
  );
}

export default App;
