import React from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelNav.jsx';
import { ChatPane } from './ChatPane.jsx';

function App(props) {
  return (
    <>
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelList />
        </div>
        <div className="col">
          <ChatPane />
        </div>
      </div>
    </>

  );
}

export default App;