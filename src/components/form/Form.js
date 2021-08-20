import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {};

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <h1>{name}</h1>
    </div>
  );
};

// setName(e.target.value);
