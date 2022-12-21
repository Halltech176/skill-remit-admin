import { useState, useEffect } from "react";
import send from "../../../assets/send.png";
import copy from "../../../assets/copy.png";
import axios from "axios";
import { BASE_URL, HEADER } from "../../../../Api";
import { useSelector, useDispatch } from "react-redux";
import { FetchChat, UserChat } from "../../../Redux/Actions";
// import { io } from "socket.io-client";
const ChatFooter = ({ content, setContent, message, setMessage }) => {
  console.log(content);
  const dispatch = useDispatch();
  const SendMessage = async () => {
    try {
      const CHAT_ID = JSON.parse(localStorage.getItem("CHAT_ID"));
      const response = await axios.post(
        `${BASE_URL}/chat/${CHAT_ID}/message`,
        { content: message },
        HEADER
      );
      setContent([...content, { content: message }]);
      console.log(content);
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="input bg-white p-1 md:p-2 flex items-center ">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ background: "#F7F7FD" }}
        className="w-full text-sm p-2 md:px-5 py-3"
        type="text"
      />
      <span>
        <img src={copy} className="md:w-5 w-4 mx-2" alt="copy" />
      </span>
      <span className="cursor-pointer " onClick={SendMessage}>
        <img src={send} className="md:w-5 w-4 mx-3" alt="send" />
      </span>
    </div>
  );
};
export default ChatFooter;
