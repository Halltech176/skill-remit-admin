import Accounts from "./Accounts.json";
import person1 from "../../../assets/no_avatar.png";
import arrowDown from "../../../assets/arrow-down.png";
import arrowUp from "../../../assets/arrow-up.png";
import { Users, ClickedUser, GetReview } from "../../../Redux/Actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NoUser } from "../../Common/NoData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NairaFormatter } from "../../utils/NumberFormat";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const UserComponent = ({ user_credentials }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector?.clickeduser);
  console.log(user_credentials);

  const GetUserDetails = (id) => {
    console.log("Getting user details");
    window.localStorage.setItem("ACTIVE_USER_ID", JSON.stringify(id));

    const response = user_credentials?.find((data) => {
      return data._id === id;
    });
    dispatch(ClickedUser());
    console.log(response);

    navigate(`/admin/allAccount/${response?._id}`);
  };

  const renderAccounts = user_credentials?.map((data, index) => {
    console.log(data?.wallet?.balance);
    return (
      <TableRow onClick={() => GetUserDetails(data?._id)} key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>
          <span>
            {" "}
            <LazyLoadImage
              alt="user"
              effect="blur"
              src={data?.avatar?.url ? data?.avatar?.url : person1}
              className="w-8 md:block hidden rounded-full h-8"
            />
          </span>
        </TableCell>
        <TableCell>
          <span className="mx-3">
            {data.firstName} {data.lastName}
          </span>
        </TableCell>
        <TableCell
          // sx={{ display: "flex", alignItems: "center" }}
          component="th"
          scope="row"
        >
          {data?.averageReviewPercentage === undefined ? (
            <span>no ratings available</span>
          ) : (
            <meter
              className="md:w-36 hidden md:block  shrink-0"
              max={100}
              min={0}
              value={data?.averageReviewPercentage}
              high={75}
              low={25}
              optimum={50}
            ></meter>
          )}
        </TableCell>
        <TableCell>
          <span>
            {" "}
            <img
              src={data.averageReviewPercentage >= 25 ? arrowUp : arrowDown}
            />{" "}
          </span>
        </TableCell>
        <TableCell>
          {data?.averageReviewPercentage === undefined ? (
            "0 %"
          ) : (
            <span> {data?.averageReviewPercentage} %</span>
          )}
        </TableCell>

        <TableCell align="center">
          {data?.project === undefined ? 0 : data?.project}
        </TableCell>
        <TableCell align="center">
          {data?.wallet?.balance === undefined
            ? "₦0"
            : `₦${NairaFormatter.format(data?.wallet?.balance)}`}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      {user_credentials?.length ? (
        <TableContainer component="main">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell colSpan={2} align="left">
                  User
                </TableCell>
                <TableCell colSpan={3} align="left">
                  Ratings
                </TableCell>
                <TableCell align="left">Project</TableCell>
                <TableCell align="left">Wallet Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderAccounts}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        // <div>
        //   <section
        //     style={{ color: " #4C4C4C" }}
        //     className="md:flex grid grid-cols-4 font-manrope  my-1  md:my-5 justify-between items-center  text-sm md:text-md font-bold"
        //   >
        //     <h2 className="hidden md:block md:mr-0 mr-5 md:shrink-0  md:p-0 p-4">
        //       S/N
        //     </h2>
        //     <h2 className="md:w-60 md:mr-0 mr-5 md:shrink-0  md:p-0 p-4">
        //       User
        //     </h2>

        //     <h2 className="md:w-80 md:mr-0 mr-5 md:shrink-0 md:p-0 p-4  ">
        //       Ratings
        //     </h2>
        //     <h2 className="md:w-32 md:mr-0 md:ml-14  text-center md:shrink-0 md:p-0 p-4">
        //       Project
        //     </h2>
        //     <h2 className="md:w-36 md:mr-0 mr-5   md:shrink-0 md:p-0 p-4  ">
        //       Wallet balance
        //     </h2>
        //   </section>
        //   <div>{renderAccounts}</div>
        // </div>
        <NoUser />
      )}
    </>
  );
};

export default UserComponent;
