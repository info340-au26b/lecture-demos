import INITIAL_CHAT_LOG from '../data/chat_log.json';

export function ChatPane(props) {

  //[{},{},{},{}]
  console.log(INITIAL_CHAT_LOG);

  const messageElemArray = INITIAL_CHAT_LOG.map((messageObj) => {
    const transformed = <MessageItem key={messageObj.timestamp} messageData={messageObj} />;
    return transformed;
  });

  //[<>,<>,<>,<>]
  // const messageElemArray = [
  //     <MessageItem messageData={INITIAL_CHAT_LOG[0]} />,
  //     <MessageItem messageData={INITIAL_CHAT_LOG[1]} />,
  //     <MessageItem messageData={INITIAL_CHAT_LOG[2]} />,
  //     <MessageItem messageData={INITIAL_CHAT_LOG[3]} />
  // ]


  return (
    <div>
      {/* {[<li key="">a</li>, <li>b</li>, <li>c</li>, <li>d</li>]} */}

      {messageElemArray}


      {/* <MessageItem userName="Parrot" text="Squawk" />
      <MessageItem userName="Penguin" text="Awk!" />
      <MessageItem userName="Eagle" text="Caw Caw Caw I'm an eagle!" /> */}
    </div>
  )
}

function MessageItem(props) {
  console.log(props);
  const {userName, text} = props.messageData;

  return (
    <div className="message d-flex mb-3">
      <img src={"/img/"+userName+".png"} alt={userName+" avatar"}/>
      <div className="ms-2">
        <p><strong>{userName}</strong></p>
        <p>{text}</p>
      </div>
    </div>
  )
}