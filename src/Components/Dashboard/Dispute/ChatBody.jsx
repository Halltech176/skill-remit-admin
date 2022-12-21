import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatFooter from "./ChatFooter";
import { FetchChat, UserChat } from "../../../Redux/Actions";

const ChatBody = ({ chat, content, setContent }) => {
  const [message, setMessage] = useState("");
  console.log(content);

  // useEffect(() => {
  //   dispatch(UserChat());
  // }, []);
  // useEffect(() => {
  //   setContent(chat?.docs && [...chat?.docs]);
  // }, []);

  console.log(chat?.docs);
  console.log(content);
  const renderChats = content?.map((data, index) => {
    console.log(data?.content);
    return (
      <div
        key={index}
        style={{ background: "#F7F7FD" }}
        className="  my-5 text-primary-100 rounded-md md:text-sm   text-sm p-2 md:max-w-xs w-fit md:p-2"
      >
        <p>{data?.content}</p>
      </div>
    );
  });
  return (
    <div
      className="p-3 pb-5 chat-container  relative overflow-y-scroll relative rounded-md  "
      style={{ background: "rgba(0,134, 64,0.1)" }}
    >
      <h1 style={{ color: "#747A94" }} className="text-center  py-3 uppercase">
        TODAY
      </h1>

      <section className="flex chat-container overflow-y-scroll app_container flex-col">
        {renderChats}

        <div
          style={{ background: "#F7F7FD" }}
          className=" my-5  max-w-sm self-end  ll text-primary-100 rounded-md  md:text-base w-52 md:w-full text-sm p-2 md:max-w-sm md:p-2"
        >
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            feugiat tempor faucibus gravida.
          </p>
        </div>
      </section>
      <div className="absolute -bottom-12 left-2 right-2">
        <ChatFooter
          message={message}
          setContent={setContent}
          setMessage={setMessage}
          content={content}
        />
      </div>
    </div>
  );
};
export default ChatBody;
