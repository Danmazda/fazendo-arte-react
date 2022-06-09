import "./MessageModal.css";
import { MessageContext } from '../../../Contexts/MessageProvider';
import { useContext } from "react";

const MessageModal = () => {
  const {message} = useContext(MessageContext);
  return (
    <div className={`modal ${message.show}`}>{message.message}</div>
  );
};

export default MessageModal;