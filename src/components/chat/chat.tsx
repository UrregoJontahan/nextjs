'use client';
 
import { useChat } from 'ai/react';
 
export const Chat = (props:{agent:string}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages:[
        {
            id:"1",
            role:"system",
            content:props.agent
        }
    ],
  });
 
  return (
    <main className="mx-auto w-full h-dvh max-w-lg p-24 flex flex-col border-2 border-indigo-500/75 bg-gray-800 rounded-md ">
      <section className="mb-auto m ">
        {messages
        .filter(m => m.role !== "system")
        .map(m => (
          <div className="mb-4 " key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black relative top-20"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid border-2 p-2 rounded-md relative top-20"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}