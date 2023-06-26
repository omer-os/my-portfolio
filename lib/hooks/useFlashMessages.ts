import { useState, useCallback } from "react";

const useFlashMessages = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const addFlash = useCallback((message: string) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const removeFlash = useCallback((index: number) => {
    setMessages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return { messages, addFlash, removeFlash };
};

export default useFlashMessages;
