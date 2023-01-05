import { useState } from "react";
import NotificationModal from "./NotificationModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
      <TableRow
        key={index}
        sx={{
          cursor: "pointer",
        }}
        onClick={() => GetNotification(data?._id)}
      >
        <TableCell style={{ color: " #2E303D" }}>
          {(index + 1) * notifications?.page}
        </TableCell>
        {/* <TableCell align="left"> {data.name}</TableCell> */}
        <TableCell align="left">
          {" "}
          {new Date(data?.createdAt).toDateString()}
        </TableCell>
        <TableCell align="left">
          {" "}
          {data?.payload?.createdBy?.firstName}{" "}
          {data?.payload?.createdBy?.lastName}
        </TableCell>
        <TableCell align="left">{data?.message}</TableCell>
      </TableRow>
    );
  });
  return (
    <>
      <main>
        <NotificationModal contents={contents} open={open} setOpen={setOpen} />

        <TableContainer component="main">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell align="left">Date& TIme</TableCell>
                <TableCell align="left">Sender</TableCell>
                <TableCell align="left">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderNotifications}</TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};
export default NotificationBody;
