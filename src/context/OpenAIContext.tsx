import React, { createContext, useContext } from "react";

interface OpenAIContextType {
  apiKey: string;
}

const OpenAIContext = createContext<OpenAIContextType | undefined>(undefined);

export const OpenAIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const apiKey = __OPENAI_API_KEY__; // hoặc lấy từ biến khác

  return (
    <OpenAIContext.Provider value={{ apiKey }}>
      {children}
    </OpenAIContext.Provider>
  );
};

export const useOpenAI = () => {
  const context = useContext(OpenAIContext);
  if (!context) throw new Error("useOpenAI must be used inside OpenAIProvider");
  return context;
};
