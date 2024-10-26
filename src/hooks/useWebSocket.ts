import { useEffect, useRef, useState } from 'react';

interface WebSocketHook {
  messages: any[];
  sendMessage: (message: any) => void;
  connected: boolean;
}

export const useWebSocket = (url: string): WebSocketHook => {
  const [messages, setMessages] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      setConnected(true);
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    ws.current.onclose = () => {
      setConnected(false);
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (message: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    }
  };

  return { messages, sendMessage, connected };
};
