
import { cn } from "@/lib/utils";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useChat } from "ai/react";
import { Send } from "lucide-react";
import { Message } from "ai";
type ChatInputProps = {
  className: string;
};

const ChatInput = ({ className }: ChatInputProps) => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();

  console.log("messages", messages);

  return (
    <div className="overflow-y-scroll">
      <form
        onSubmit={handleSubmit}
        className={cn(
          `border-t border-primary-content space-y-2 flex items-center flex-col `,
          className
        )}
      
      >
        <TextareaAutosize
          rows={2}
          maxRows={4}
          value={input}
          autoFocus
          onChange={handleInputChange}
          placeholder="Type a message..."
          onKeyDown={(e)=>{if (e.key === 'Enter') {handleSubmit} {
            
          }}}
          className="peer disabled:opacity-50  resize-none block pr-14 px-2 w-full border-0 bg-zinc-100  py-1.5 text-primary  text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="btn rounded-none mr-2 relative bottom-[2.2rem]   btn-sm self-end "
        >
          <Send className="w-5  h-5 text-primary " />
        </button>
      </form>
      {messages.length > 0 ? (
        <span className="mx-2 text-primary relative bottom-10 ">
          {messages.map((message: Message) => (
            <div key={message.id}>
              {message.role === "assistant" ? (
                <h3 className="text-sm font-semibold mt-2">AI Assistant</h3>
              ) : (
                <h3 className="text-sm font-semibold mt-2  mr-1">
                  You
                </h3>
              )}
              {message.content.split("\n").map((item: string) => {
                if (item === "") {
                  return <p key={item}>&nbsp;</p>;
                } else {
                  if (message.role === "assistant") {
                    return (
                      <>
                        <div key={item} className="bg-blue-600 inline-block  text-white dark:bg-blue-400 p-2 rounded-lg text-left">
                          <p className="text-sm ">{item}</p>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div key={item} className="bg-white inline-block text-end p-2 rounded-lg ">
                          <p className="text-sm  ">{item}</p>
                        </div>
                      </>
                    );
                  }
                }
              })}
            </div>
          ))}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatInput;
