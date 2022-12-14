import { sendTo, sendAs } from "./SentMessage";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../../../../Api";
import { Users, GetUserStats, GetNotifications } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { HandleError } from "../../../Components/Common/HandleError";
import ButtonComponent from "../../../Components/Common/ButtonComponent";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../../Components/Common/Toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Commission = () => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("");
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [userIds, setUserIds] = useState([]);

  const dispatch = useDispatch();
  const { user_stats } = useSelector((state) => state?.userstats);
  const selector = useSelector((state) => state.users?.user?.docs);
  const selector2 = useSelector((state) => state.users?.user);

  useEffect(() => {
    dispatch(GetUserStats());
  }, []);
  console.log(user_stats);

  const handleSendTo = (e, id) => {
    setUser(e.target.value);
    if (id === "all") {
      const response = user_stats?.docs?.map((data, index) => {
        return data;
      });
      return setUserIds(response);
    } else {
      const response = user_stats?.docs
        ?.filter((data, index) => {
          return data?.type === id;
        })
        .map((data) => {
          return data;
        });
      return setUserIds(response);
    }
  };

  console.log(userIds);

  // console.log(selector);
  const handleMode = (e) => {
    setMode(e.target.value);
  };

  console.log(selector2);
  console.log(user);
  const renderSentTO = sendTo.map((data, index) => {
    return (
      <section className="flex text-center">
        <input
          value={data.value}
          onChange={(e) => handleSendTo(e, data.value)}
          checked={user === data.value}
          className=""
          name="sendTo"
          type="radio"
        />
        <label className="mx-3 shrink-0 text-dark font-medium text-sm md:text-base">
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
        <label className="mx-3 text-dark font-medium text-sm md:text-base">
          {data.label}
        </label>
      </section>
    );
  });
  const SendBroadcast = async (e) => {
    e.preventDefault();
    const data = { title, message, userIds, as: mode };
    setLoading(true);

    try {
      if (data?.title === "") {
        throw "Title should not be empty";
      }
      if (data?.message === "") {
        throw "Message should not be empty";
      }
      const response = await dispatch(GetNotifications(data)).unwrap();
      console.log(response);

      SuccessNotification(response.message);

      setLoading(false);
      setMessage("");
      setTitle("");
      setMode("");
      setUser("");
      console.log(response);
    } catch (err) {
      HandleError(err);
      setLoading(false);
      console.log(err?.response?.data?.message);
    }
  };
  return (
    <main className=" ">
      <ToastContainer transition={Zoom} autoClose={800} />
      <h1
        style={{ color: "#001B87" }}
        className="text-primary text-2xl md:text-3xl"
      >
        Send Broadcast
      </h1>
      <form className="md:my-10 my-3">
        <h1 className="text-dark text-sm  font-semibold md:text-xl">Send To</h1>
        <div className="my-8 flex">{renderSentTO}</div>
      </form>
      <form className="my-10">
        <h1 className="text-dark text-sm font-semibold  md:text-xl">Send As</h1>
        <div className="my-8 flex">{renderSentAs}</div>
      </form>

      <form className="my-10">
        <div className="my-8 flex">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="md:w-2/3 w-full text-normal text-sm md:text-base font-medium p-2 md:p-3 bg-primary-200 rounded-xl"
            rows="2"
          />
        </div>
        <div className="my-8 flex">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="md:w-2/3 w-full text-normal text-sm md:text-base font-medium p-2 md:p-3 bg-primary-200 rounded-xl"
            rows="6"
          />
        </div>
        <ButtonComponent
          title="Send Message"
          clickFunction={SendBroadcast}
          // bgcolor="btn"
          width="w-64"
          // width :
          loading={loading}
        />
      </form>
    </main>
  );
};
export default Commission;
