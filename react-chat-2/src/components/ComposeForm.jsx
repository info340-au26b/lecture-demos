import React, { useState } from 'react';

export function ComposeForm(props) {
  const { currentChannel, currentUser, howToAddMessageFunc } = props;

  const [typedInput, setTypedInput] = useState("");

  const handleChange = (event) => {
    setTypedInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitting", typedInput);

    howToAddMessageFunc(currentUser, typedInput, currentChannel);

    setTypedInput("");
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={typedInput}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}