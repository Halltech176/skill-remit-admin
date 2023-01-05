import arrowRight from "../../../assets/arrow-right.png";
import user_vendor from "../../../assets/user_vendor.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { FetchChat, UserChat } from "../../../Redux/Actions";
import { io } from "socket.io-client";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import { HandleError } from "../../Common/HandleError";
import { HandleSuccess } from "../../Common/HandleSuccess";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/logo.png";

const Dispute = () => {
  const dispatch = useDispatch();
  const { chats, error } = useSelector((state) => state.chats);
  const { user } = useSelector((state) => state.user);
  const { chat, loading } = useSelector((state) => state.chat);
  const [barName, setBarName] = useState(null);
  const [content, setContent] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const bodyRef = useRef(null);

  console.log(chat);
  console.log(chats);

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
    // bodyRef.current.scrollIntoView();
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      console.log(bodyRef.current.scrollHeight);
    }

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
    <main>
      <section className="md:flex    justify-between pt-5 ">
        <ToastContainer transition={Zoom} autoClose={800} />
        <div className=" hidden  md:block  w-2/4 mr-8">
          <div className="flex  items-center bg-primary text-white p-4 rounded-md justify-between">
            <p>Dispute </p>
            <span>
              <img className="w-4" src={arrowRight} alt="arrow" />
            </span>
          </div>
          {chats === null ? (
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

          <div className="  pb-5  overflow-y-scroll h-96 app_container ">
            {renderDisputes}
          </div>
        </div>
        <div
          style={{ background: "rgba(0,134, 64,0.1)" }}
          className="relative md:w-5/6"
        >
          {chat === null && !loading ? (
            <div>
              <img src={logo} alt="logo" />
            </div>
          ) : (
            ""
          )}

          <ChatHeader barName={barName} setBarName={setBarName} />
          <div ref={bodyRef} className=" ">
            <ChatBody
              currentUser={barName}
              setContent={setContent}
              content={content}
              chat={chat}
              ref={bodyRef}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Dispute;
