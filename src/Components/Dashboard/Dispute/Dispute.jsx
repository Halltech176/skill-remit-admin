import arrowRight from "../../../assets/arrow-right.png";
import user_vendor from "../../../assets/user_vendor.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FetchChat, UserChat } from "../../../Redux/Actions";
import { io } from "socket.io-client";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import { HandleError } from "../../Common/HandleError";
import { HandleSuccess } from "../../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dispute = () => {
  const dispatch = useDispatch();
  const { chats, loading, error } = useSelector((state) => state.chats);
  const { user } = useSelector((state) => state.user);
  const { chat } = useSelector((state) => state.chat);
  const [barName, setBarName] = useState(null);
  const [content, setContent] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState(null);
  console.log(chat);

  useEffect(() => {
    const socket = io(`https://skill-remit.herokuapp.com?userId=${user?._id}`, {
      transports: ["websocket"],
    });
    socket.on("connect", () => {
      console.log(`you are connected  to id ${socket.id}`);
    });

    socket.on("disconnect", () => {
      console.log(socket.id);
    });

    socket.on("chat", (data) => {
      setContent(data);
      console.log(data);
    });
  }, []);

  const GetBarUser = (id) => {
    const response = chats?.docs.find((data, index) => {
      return data?._id === id;
    });
    setBarName(response);
  };
  const id = JSON.parse(window.localStorage.getItem("CHAT_ID"));

  const GetUserChat = async (id) => {
    try {
      window.localStorage.setItem("CHAT_ID", JSON.stringify(id));
      GetBarUser(id);
      const { payload } = await dispatch(UserChat(id));
      setContent(payload?.data?.docs);
      console.log(payload?.data?.docs);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(content);

  const renderDisputes = chats?.docs?.map((data, index) => {
    return (
      <section
        onClick={() => GetUserChat(data?._id)}
        key={index}
        style={{
          cursor: "pointer",
          border: "1px solid #E8EBF2",
          background: "#FBFCFE",
        }}
        className="mb-3  relative app_container p-3 flex rounded-md justify-between"
      >
        <div className="flex items-center">
          <span>
            <img
              className="w-16 h-16 rounded-full"
              src={
                data?.users[0]?.avatar
                  ? data?.users[0]?.avatar.url
                  : user_vendor
              }
              alt="user"
            />
          </span>
          <div className="mx-2">
            <h3 className="text-primary text-md capitalize">
              {" "}
              {data?.users[0]?.firstName} {data?.users[0]?.lastName}
            </h3>
            <p>How are you doing??</p>
          </div>
        </div>

        <span>11:30</span>
        <span className="absolute bg-red-400 text-xs p-1 px-2  text-white rounded-3xl bottom-3 right-4">
          4
        </span>
      </section>
    );
  });
  return (
    <main className="md:flex h-full chat-container justify-between pt-5 ">
      <ToastContainer transition={Zoom} autoClose={800} />
      <div className=" hidden  md:block  w-2/4 mr-8">
        <div className="flex  items-center bg-primary text-white p-4 rounded-md justify-between">
          <p>Dispute </p>
          <span>
            <img className="w-4" src={arrowRight} alt="arrow" />
          </span>
        </div>
        {chat === null ? (
          ""
        ) : (
          <div className="my-4">
            <input
              className="p-3 text-dark rounded-md w-5/6"
              style={{
                border: " 1px  solid #E8EBF2",
                // color: "rgba(26, 35, 78, 0.8)",
              }}
              type="text"
              placeholder="search for dispute"
            />
          </div>
        )}

        <div className="h-full my-10 pb-5 app_container overflow-y-scroll">
          {renderDisputes}
        </div>
      </div>
      <div style={{ background: "#F7F7FD" }} className=" md:w-5/6">
        <ChatHeader barName={barName} setBarName={setBarName} />
        <div className="">
          <ChatBody
            currentUser={barName}
            setContent={setContent}
            content={content}
            chat={chat}
          />
        </div>
      </div>
    </main>
  );
};
export default Dispute;
