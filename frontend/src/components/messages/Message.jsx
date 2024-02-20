import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn-icons-png.freepik.com/256/1946/1946429.png"
            alt=""
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>
        Hi! what is upp?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gs-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
