import debit from "../../../assets/debit.png";
import credit from "../../../assets/credit.png";
import { NairaFormatter } from "../../utils/NumberFormat";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TransactionComponent = ({ users_transactions }) => {
  const renderTransactions = users_transactions.map((data, index) => {
    return (
      <TableRow
        key={index}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell
          sx={{ display: "flex", alignItems: "center" }}
          component="th"
          scope="row"
        >
          <img
            className="w-10 mr-2"
            src={data.type === "credit" ? debit : credit}
            alt="credit-debit-icon"
          />
          {data.name}
        </TableCell>
        {/* <TableCell align="left"> {data.name}</TableCell> */}
        <TableCell align="left">{data.date}</TableCell>
        <TableCell align="left">{data.reference}</TableCell>
        <TableCell align="left">
          {data.type === "credit" ? "+" : "-"}₦
          {NairaFormatter.format(data.amount)}
        </TableCell>
      </TableRow>
    );
  });
  return (
    <TableContainer component="main">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Date& TIme</TableCell>
            <TableCell align="left">Transactions</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTransactions}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransactionComponent;
