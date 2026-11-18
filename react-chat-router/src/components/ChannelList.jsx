import React from 'react';

export function ChannelList(props) {
  const { channelNames } = props;

  //render the links
  const liArray = channelNames.map((channelNameString) => {
    return (
      <div key={channelNameString}>
        <a className="px-2"
          name={channelNameString}
          href={"/chat/"+channelNameString}
        >
          {channelNameString}
        </a>
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}