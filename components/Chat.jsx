"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message) => generateChatResponse(message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
  };
  return (
    <div className="min-h-[87vh] w-full flex justify-between flex-col">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="join w-full">
          <input
            type="text"
            placeholder="Send a message"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary join-item">
            Ask questions
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;