import { useState, useEffect } from "react";
import { Bell, X, CheckCircle, Info, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface Notification {
  id: string;
  type: "success" | "info" | "error";
  message: string;
  timestamp: Date;
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Mock notifications
  useEffect(() => {
    setNotifications([
      {
        id: "1",
        type: "success",
        message: "Your listing 'Modern SaaS UI Kit' has a new sale!",
        timestamp: new Date(),
      },
      {
        id: "2",
        type: "info",
        message: "New update available for 'Abstract Icon Set'.",
        timestamp: new Date(Date.now() - 3600000),
      }
    ]);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-black transition-colors"
      >
        <Bell className="h-5 w-5" />
        {notifications.length > 0 && (
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-80 z-50 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200/50"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <button 
                  onClick={() => setNotifications([])}
                  className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {notifications.length === 0 ? (
                  <div className="py-8 text-center text-sm text-gray-400">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className="group relative flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className={`mt-0.5 flex-shrink-0`}>
                        {notification.type === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {notification.type === "info" && <Info className="h-4 w-4 text-blue-500" />}
                        {notification.type === "error" && <AlertCircle className="h-4 w-4 text-red-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {notification.message}
                        </p>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          Just now
                        </span>
                      </div>
                      <button 
                        onClick={() => removeNotification(notification.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-black transition-all"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
