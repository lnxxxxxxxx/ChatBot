import React from 'react';

const ChatMessage = ({ message, isSender }) => {
  if (message === undefined) {
    return null; // No renderizar el componente si el mensaje es undefined
  }

  const isArray = Array.isArray(message);
  const firstOption = isArray ? message[0] : null;
  const remainingOptions = isArray ? message.slice(1) : [];

  const containerClass = isSender ? 'chat-message sender' : 'chat-message receiver';
  const messageClass = isSender ? 'message sender' : 'message receiver';
  return (
    <div className={containerClass}>
      <div className={messageClass}>
        {firstOption ? (
          <React.Fragment>
            <span className="first-option">{firstOption}</span>
            {remainingOptions.length > 0 && (
              <ul className="options">
                {remainingOptions.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ) : (
          <span>{message}</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
