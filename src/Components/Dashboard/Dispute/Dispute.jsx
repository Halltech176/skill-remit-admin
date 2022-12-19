import arrowRight from "../../../assets/arrow-right.png";
import user_vendor from "../../../assets/user_vendor.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchChat, UserChat } from "../../../Redux/Actions";
import { io } from "socket.io-client";
import ChatBody from "./ChatBody";
import ChatBar from "./ChatBar";

const Dispute = () => {
  const dispatch = useDispatch();
  const { chats, loading, error } = useSelector((state) => state.chats);
  const { user } = useSelector((state) => state.user);
  const { chat } = useSelector((state) => state.chat);
  console.log(chat);

  useEffect(() => {
    dispatch(FetchChat());
  }, []);

  const socket = io(`ws://skill-remit.herokuapp.com?userId=${user?._id}`, {
    transports: ["websocket"],
  });
  // const socket = io(`ws://skill-remit.herokuapp.com?userId=${user?._id}`, {
  //   transports: ["websocket"],
  // });

  socket.on("connect", () => {
    console.log(`you are connected already to id ${socket.id}`);
  });
  socket.on("disconnect", () => {
    console.log(socket.id);
  });
  // useEffect(() => {
  //   dispatch(UserChat());
  // }, [socket]);

  // console.log(socket);

  const GetUserChat = async (id) => {
    try {
      window.localStorage.setItem("CHAT_ID", JSON.stringify(id));
      const response = await dispatch(UserChat());
      console.log(response);
      // console.log(id);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chats);
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
    <main className="md:flex  h-96 justify-between pt-5 md:pt-14">
      <div className=" hidden  md:block  w-2/4 mr-8">
        <div className="flex  items-center bg-primary text-white p-4 rounded-md justify-between">
          <p>Dispute </p>
          <span>
            <img className="w-4" src={arrowRight} alt="arrow" />
          </span>
        </div>
        <div className="my-4">
          <input
            className="p-3 text-dark rounded-md w-5/6"
            style={{
              border: " 1px  solid #E8EBF2",
              // color: "rgba(26, 35, 78, 0.8)",
            }}
            type="text"
            placeholder="search for patient"
          />
        </div>
        <div className="h-full my-10 pb-5 app_container overflow-y-scroll">
          {renderDisputes}
        </div>
      </div>
      <div className=" md:w-5/6">
        <ChatBar />
        <div className="">
          <ChatBody socket={socket} chat={chat} />
        </div>
      </div>
    </main>
  );
};
export default Dispute;
