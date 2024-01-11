"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  // useMutation to trigger generateChatResponse
  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong....");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });
  console.log(messages);

  // Defines a function to handle form submission:
  const handleSubmit = (e) => {
    // Prevents the default form behavior.
    e.preventDefault();

    // Creates a query object with the role "user" and the content of the input text.
    const query = { role: "user", content: text };

    // Calls the mutate function with the query, triggering the generateChatResponse function.
    mutate(query);

    // Updates the messages state with the new query.
    setMessages((prev) => [...prev, query]);

    // Resets the input text.
    setText("");
  };

  return (
    <div className="min-h-[87vh] w-full flex justify-between flex-col">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? "🧑🏻" : "🤖";
          const bcg = role === "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl"> {content}</p>
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
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
          <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={isPending}
          >
            {isPending ? "please wait..." : "ask questions"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
