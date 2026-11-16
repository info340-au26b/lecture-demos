import React from 'react';

export function ComposeForm(props) {
  const { currentChannel } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form");
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}