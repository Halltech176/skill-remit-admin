import { sendTo, sendAs } from "./SentMessage";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../../../Api";
import { Users } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { HandleError } from "../../../Components/Common/HandleError";
import { Loader1 } from "../../../Components/Common/Loader";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Commission = () => {
  const [mode, setMode] = useState("");
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [userIds, setUserIds] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.users?.user?.docs);
  const selector2 = useSelector((state) => state.users?.user);

  useEffect(() => {
    dispatch(Users({ limit: selector2?.totalPages * selector2?.totalDocs }));
  }, []);

  const GetID = (id) => {
    console.log(id);
    const response = selector
      ?.filter((data, index) => {
        return data?.type === id;
      })
      .map((data, index) => {
        return data?._id;
      });
    setUserIds(response);
    console.log(response);
    return response;
  };

  console.log(userIds);

  // console.log(selector);
  const handleMode = (e) => {
    setMode(e.target.value);
  };
  const handleUser = (e) => {
    setUser(e.target.value);
    GetID(e.target.value);
  };

  console.log(selector2);
  console.log(user);
  const renderSentTO = sendTo.map((data, index) => {
    return (
      <section className="flex text-center">
        <input
          value={data.value}
          onChange={handleUser}
          checked={user === data.value}
          className=""
          name="sendTo"
          type="radio"
        />
        <label className="mx-3 shrink-0 text-dark font-medium text-sm md:text-xl">
          {data.label}
        </label>
      </section>
    );
  });

  const renderSentAs = sendAs.map((data, index) => {
    return (
      <section className="flex text-center">
        <input
          value={data.value}
          onChange={handleMode}
          checked={mode === data.value}
          className=""
          name="sentAs"
          type="radio"
        />
        <label className="mx-3 text-dark font-medium text-sm md:text-xl">
          {data.label}
        </label>
      </section>
    );
  });
  const SendBroadcast = async (e) => {
    e.preventDefault();
    const data = { title, message, userIds, as: mode };
    console.log(data);
    try {
      const response = await axios.post(
        `${BASE_URL}//notification/send`,
        data,
        HEADER
      );
      if (response.status === 200) {
        SuccessNotification(response.data.message);
      }
      console.log(response);
    } catch (err) {
      HandleError(err);
      console.log(err.response.data.message);
    }
  };
  return (
    <main className=" ">
      <ToastContainer transition={Zoom} autoClose={800} />
      <h1
        style={{ color: "#001B87" }}
        className="text-primary text-3xl md:text-5xl"
      >
        send Broadcast
      </h1>
      <form className="md:my-10 my-3">
        <h1 className="text-dark text-xl   md:text-3xl">send To</h1>
        <div className="my-8 flex">{renderSentTO}</div>
      </form>
      <form className="my-10">
        <h1 className="text-dark text-xl   md:text-3xl">send As</h1>
        <div className="my-8 flex">{renderSentAs}</div>
      </form>

      <form className="my-10">
        <div className="my-8 flex">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="md:w-2/3 w-full text-normal text-sm md:text-xl font-medium p-2 md:p-5 bg-primary-200 rounded-xl"
            rows="2"
          />
        </div>
        <div className="my-8 flex">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="md:w-2/3 w-full text-normal text-sm md:text-xl font-medium p-2 md:p-5 bg-primary-200 rounded-xl"
            rows="8"
          />
        </div>
        <button
          onClick={SendBroadcast}
          className=" text-white rounded-md w-64 py-3  bg-normal"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};
export default Commission;
