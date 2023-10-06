import { cn } from "@/lib/utils";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useChat } from "ai/react";
import { Send } from "lucide-react";
import { Message } from "ai"; //type of messages

type ChatInputProps = {
  className: string;
};

const ChatInput = ({ className }: ChatInputProps) => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();

  console.log("messages", messages);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn(
          `border-t border-primary-content space-y-2 flex flex-col `,
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
          className="peer disabled:opacity-50  resize-none block pr-14 px-2 w-full border-0 bg-zinc-100  py-1.5 text-primary  text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="btn rounded-none mr-1 relative bottom-[2.6rem]   btn-sm self-end bg-zinc-100 "
        >
          <Send className="w-4 h-4 text-secondary" />
        </button>
      </form>
    </>
  );
};
