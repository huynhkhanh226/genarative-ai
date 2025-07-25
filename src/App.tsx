/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { askOpenAI } from "./api/openai";

const App = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    try {
      const result = await askOpenAI(message);
      setResponse(result);
    } catch (err) {
      setResponse("Lỗi gọi OpenAI");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Nhập tin nhắn..."
        ></textarea>

        <button
          onClick={handleAsk}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition"
        >
          Gửi
        </button>

        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
          {response}
        </pre>
      </div>
    </div>
  );
};

export default App;
