import { FC } from "react";

const ChatHeader: FC = () => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-primary-focus">
      <div className="flex text-sm">
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-purple-500" />
          <p className="font-medium"></p>
        </div>
        <p className="text-xs">Chat with LingoSafari Chatbot</p>
      </div>
    </div>
  );
};

export default ChatHeader;
