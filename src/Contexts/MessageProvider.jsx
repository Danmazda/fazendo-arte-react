import { createContext, useState } from "react";
import MessageModal from '../components/Modals/MessageModal/MessageModal';
export const MessageContext = createContext();
const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ message: "", show: "" });
  const showMessage = (message) => {
    setMessage({ message, show: "show" });
    setTimeout(() => {
      setMessage({ message: "", show: "" });
    }, 5000);
  };
  return (
    <MessageContext.Provider
      value={{ message, setMessage, showMessage }}
    >
      <MessageModal></MessageModal>
      {children}
    </MessageContext.Provider>
  );
};
export default MessageProvider;