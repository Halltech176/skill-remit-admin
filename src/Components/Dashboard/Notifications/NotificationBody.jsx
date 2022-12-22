import { useState } from "react";
import NotificationModal from "./NotificationModal";
const NotificationBody = ({ notifications }) => {
  const [open, setOpen] = useState(false);
  const [contents, setContents] = useState({});
  const GetNotification = (id) => {
    const response = notifications?.docs?.find((data, index) => {
      return data._id === id;
    });
    setContents(response);
    setOpen(true);
  };
  console.log(new Date("2022-12-21T16:35:47.121Z").toLocaleDateString());
  const renderNotifications = notifications?.docs?.map((data, index) => {
    return (
      <section
        onClick={() => GetNotification(data?._id)}
        style={{ color: " #2E303D" }}
        className="md:grid flex cursor-pointer w-full notification-grid-content border-b-2 md:py-3 py-2 gap-5 md:text-base my-4 text-xs pb-3"
        // className="flex shrink-0 mb-8 items-center items-center md:justify-between"
      >
        <p className="w-6">{(index + 1) * notifications?.page}</p>
        <p className="text-center shrink-0">
          {new Date(data?.createdAt).toDateString()}
        </p>

        <p className=" shrink-0  md:text-center">
          {data?.payload?.createdBy?.firstName}{" "}
          {data?.payload?.createdBy?.lastName}
        </p>
        <p className="  md:block hidden shrink-0 md:text-center">
          {data?.message}
        </p>
        {/* <p className="md:w-48 w-24 shrink-0 "></p> */}
      </section>
    );
  });
  return (
    <>
      <main>
        <NotificationModal contents={contents} open={open} setOpen={setOpen} />

        <section
          style={{ color: " #828282" }}
          // className="flex  shrink-0 md:justify-between items-center "
          className="grid font-nirmala notification-grid-heading text-sm gap-3 font-semibold md:text-xl "
        >
          <h2 className="shrink-0  ">S/N</h2>
          <h2 className="shrink-0 md:text-center">Date & Time</h2>
          <h2 className="shrink-0 md:py-0   md:text-center">Sender</h2>
          <h2 className=" md:block hidden shrink-0 md:py-0 py-3 md:text-center ">
            Message
          </h2>
        </section>
        <div className=" my-5 md:overflow-x-hidden overflow-x-scroll items-center app_container items-center md:justify-between">
          {renderNotifications}
        </div>
      </main>
    </>
  );
};
export default NotificationBody;
