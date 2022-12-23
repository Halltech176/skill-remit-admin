import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatFooter from "./ChatFooter";
import { FetchChat, UserChat } from "../../../Redux/Actions";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatBody = ({ chat, content, setContent, currentUser }) => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [content]);

  const sortedContent = content?.slice()?.sort((a, b) => {
    return new Date(a?.date).getTime() - new Date(b?.date).getTime();
  });
  console.log(sortedContent);

  const renderChats = content
    ?.slice()
    ?.sort((a, b) => {
      return new Date(a?.date).getTime() - new Date(b?.date).getTime();
    })
    ?.map((data, index) => {
      return (
        <div
          key={index}
          style={{ background: "#F7F7FD" }}
          className={`${
            data?.sender?._id === user?._id ? "self-end" : "self-start"
          }  my-5 text-primary-100 flex flex-col rounded-md md:text-sm   text-sm p-2 md:max-w-xs w-fit md:p-2`}
        >
          <p className="pb-2">{data?.content}</p>
          <span className="text-xs text-right send-end text-dark4">
            {format(data?.date)}
          </span>
        </div>
      );
    });
  return (
    <div
      className="p-3 pb-5 chat-container  relative overflow-y-scroll relative rounded-md  "
      style={{ background: "rgba(0,134, 64,0.1)" }}
    >
      {/* <h1 style={{ color: "#747A94" }} className="text-center  py-3 uppercase">
        TODAY
      </h1> */}

      <section className="flex chat-container px-4 overflow-y-scroll app_container flex-col">
        {renderChats}
      </section>
      <div className="absolute -bottom-12 left-2 right-2">
        <ChatFooter
          message={message}
          setContent={setContent}
          setMessage={setMessage}
          content={content}
          barName={currentUser}
        />
      </div>
    </div>
  );
};
export default ChatBody;
