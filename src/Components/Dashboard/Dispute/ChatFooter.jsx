import { useState, useEffect } from "react";
import send from "../../../assets/send.png";
import attachment from "../../../assets/copy.png";
import axios from "axios";
import { BASE_URL, HEADER } from "../../../../Api";
import { useSelector, useDispatch } from "react-redux";
import { HandleError } from "../../Common/HandleError";
import { FetchChat, UserChat } from "../../../Redux/Actions";
import Attachment from "./Attachment";
// import { io } from "socket.io-client";
const date = String(new Date(Date.now()));
console.log(date);

const ChatFooter = ({ content, setContent, barName, message, setMessage }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setOpen(true);
  };
  console.log(file);

  const SendMessage = async () => {
    try {
      const CHAT_ID = JSON.parse(localStorage.getItem("CHAT_ID"));
      const response = await axios.post(
        `${BASE_URL}/chat/${CHAT_ID}/message`,
        { content: message },
        HEADER
      );
      setContent([
        ...content,
        { content: message, sender: user, date: String(new Date(Date.now())) },
      ]);
      console.log(content);
      setMessage("");
    } catch (err) {
      HandleError(err);
      console.log(err);
    }
  };
  return (
    <>
      <Attachment
        open={open}
        setMessage={setMessage}
        message={message}
        setContent={setContent}
        file={file}
        setOpen={setOpen}
      />
      {/* {barName === null ? (
        ""
      ) : ( */}
      <div className="input shrink-0  bg-white p-1 md:p-2 flex items-center ">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ background: "#F7F7FD" }}
          className="w-full text-sm p-2 md:px-5 py-3"
          type="text"
        />
        <span>
          <input
            onChange={(e) => handleFile(e)}
            className="file_attachment ml-3 py-2 w-10"
            type="file"
          />
        </span>
        <span className="cursor-pointer " onClick={SendMessage}>
          <img src={send} className="md:w-5 w-4 mx-3" alt="send" />
        </span>
      </div>
    </>
  );
};
export default ChatFooter;
