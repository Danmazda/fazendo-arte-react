import "./MessageModal.css";
import {MessageContext} from "../../../views/Home/Home";
import { useContext } from "react";

const MessageModal = () => {
  const {message} = useContext(MessageContext);
  return (
    <div className={`modal ${message.show}`}>{message.message}</div>
  );
};

export default MessageModal;