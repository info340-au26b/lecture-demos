import React from 'react';

import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

export default function ChatPage(props) {
  const {currentUser, messageArray, addMessageFunction} = props;
 
  const channelNames = ["general", "social", "birds", "channel-4", "random"];

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channelNames={channelNames} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageArray}
          addMessageFunction={addMessageFunction}
        />
      </div>
    </div>
  )
}