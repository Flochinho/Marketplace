import { useState, useEffect, useRef } from "react";
import { Send, User, MessageSquare, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export function Chat({ recipientName }: { recipientName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg: Message = {
      id: Date.now().toString(),
      senderId: "me",
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, msg]);
    setNewMessage("");

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: "them",
        text: "Thanks for reaching out! How can I help you today?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-black p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">{recipientName}</div>
                  <div className="text-[10px] opacity-60">Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-400">Start a conversation with {recipientName}</p>
                </div>
              )}
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.senderId === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.senderId === "me" 
                      ? "bg-black text-white rounded-tr-none" 
                      : "bg-white border border-gray-100 text-gray-900 rounded-tl-none"
                  }`}>
                    {msg.text}
                    <div className={`text-[8px] mt-1 opacity-50 ${msg.senderId === "me" ? "text-right" : "text-left"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <Input 
                placeholder="Type a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-gray-50 border-none focus-visible:ring-1"
              />
              <Button type="submit" size="icon" className="h-10 w-10 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        ) : (
          <Button 
            onClick={() => setIsOpen(true)}
            size="lg" 
            className="h-14 w-14 rounded-full shadow-xl shadow-black/20"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
}
