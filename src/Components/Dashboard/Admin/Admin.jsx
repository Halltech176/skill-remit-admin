import { useState, useEffect } from "react";
import { CreateAccount, EditAccount, VerifyAccount } from "./FormModal";
import user_image from "../../../assets/user_admin.png";
import more from "../../../assets/more.png";
import { useSelector, useDispatch } from "react-redux";
import { Users } from "../../../Redux/Actions";
import { Loader1 } from "../../Common/Loader";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Users());
  }, []);
  const { user, loading, error } = useSelector((state) => state.users);
  console.log(user);
  // const loading = false;
  console.log(loading);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [activeUser, setActiveUser] = useState({});
  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const ToggleModal2 = (id) => {
    setId(id);
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const ToggleModal3 = (id) => {
    setId(id);
    setIsOpen3(!isOpen3);
  };
  const getActiveUser = user?.docs?.find((data, index) => {
    return data?._id === id;
  });
  console.log(id);
  console.log(getActiveUser);

  const [page, setPage] = useState("1");

  const handlePaginate = (e, value) => {
    setPage(value);
    dispatch(Users({ page: value }));
  };

  const renderUsers = user?.docs
    ?.filter((data, index) => {
      return data?.type === "admin";
    })
    .map((data, index) => {
      return (
        <section
          className=" my-5 w-full md:w-auto md:mx-3 mx-auto shrink-0 bg-white shadow-md rounded-xl p-4"
          key={index}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span>
                <img src={user_image} alt="user" />
              </span>
              <div className="mx-3">
                <h1>
                  {data?.firstName} {data?.lastName}
                </h1>
                <p>{data?.type}</p>
              </div>
            </div>
            <div>
              <span onClick={() => ToggleModal2(data?._id)}>
                <img src={more} alt="more" />
              </span>
            </div>
          </div>
          <span
            style={{ background: "#E8E9EB" }}
            className=" w-full h-0.5 block my-10 "
          ></span>
          <div className="">
            <p className="flex shrink-0 items-center">
              <span className="font-aeonik-light ">Email :</span>
              <span className="ml-1">{data?.email}</span>
            </p>
            <p className="flex items-center">
              <span className="font-aeonik-light 6 ">status :</span>
              <span className="ml-1">{data?.status}</span>
            </p>
          </div>
        </section>
      );
    });

  return (
    <>
      {/* {loading ? (
        <Loader1 />
      ) : ( */}
      <div className="">
        <CreateAccount
          open={isOpen}
          open2={isOpen3}
          setIsOpen={setIsOpen}
          setIsOpen2={setIsOpen3}
          ToggleModal2={ToggleModal3}
          ToggleModal={ToggleModal}
        />
        <VerifyAccount
          open={isOpen3}
          setOpen={setIsOpen3}
          ToggleModal={ToggleModal3}
        />
        <EditAccount
          active={getActiveUser}
          open={isOpen2}
          ToggleModal={ToggleModal2}
        />
        <section className="text-end my-10">
          <button
            onClick={ToggleModal}
            className="btn w-52 py-4 font-semibold font-inter px-6"
          >
            Add New
          </button>
        </section>
        <div className="md:grid block grid-cols-3">{renderUsers}</div>
        <div className="flex justify-center my-5 items-center">
          <Stack spacing={2}>
            <Pagination
              count={user?.totalPages}
              onChange={handlePaginate}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
export default Admin;
