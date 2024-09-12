import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.entryTime}</TableCell>
        <TableCell align="right">{row.exitTime}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="cart details">
                <TableHead>
                  <TableRow>
                    <TableCell>Kart Okuyucu</TableCell>
                    <TableCell>Saat</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cartDetails.map((detail, index) => (
                    <TableRow key={index}>
                      <TableCell>{detail.cartReader}</TableCell>
                      <TableCell>{detail.hour}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    entryTime: PropTypes.string.isRequired,
    exitTime: PropTypes.string.isRequired,
    cartDetails: PropTypes.arrayOf(
      PropTypes.shape({
        cartReader: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable({ pdkss }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        height: "100%",
        borderCollapse: "collapse",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Tarih</TableCell>
            <TableCell align="right">Giriş Saati</TableCell>
            <TableCell align="right">Çıkış Saati</TableCell>
            <TableCell>Detay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pdkss.entryExitDates.map((row) => (
            <Row key={row.date} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CollapsibleTable.propTypes = {
  pdkss: PropTypes.shape({
    entryExitDates: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        entryTime: PropTypes.string.isRequired,
        exitTime: PropTypes.string.isRequired,
        cartDetay: PropTypes.arrayOf(
          PropTypes.shape({
            cartReader: PropTypes.string.isRequired,
            hour: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
