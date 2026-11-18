import React, {useState} from 'react';
import { ComposeForm } from './ComposeForm.jsx';

export function ChatPane(props) {

  const currentChannel = "general" //hard code for the moment
  const { messageArray, addMessageFunction, currentUser } = props;

  //RENDERING: what do we look like

  //* Data Processing *//
  const messagesToShow = messageArray
    .filter((messageObj) => {
      return messageObj.channel === currentChannel; //keep
    })
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //* displaying display - what does it look like *//
  //DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messagesToShow.map((messageObj) => {
    const elem = <MessageItem messageData={messageObj} key={messageObj.timestamp} />
    return elem; //put it in the new array!
  });

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageArray.length === 0 && 
            <p>No messages found</p>
          }

          {messageItemArray}
        </div>

        <ComposeForm 
          currentUser={currentUser}
          currentChannel={currentChannel} 
          addMessageFunction={addMessageFunction} />
    </>
  )
}

function MessageItem(props) {
  const { userName, userImg, text } = props.messageData;

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function(event) {
    setIsLiked(!isLiked);
  }


  //decide what it looks like
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
